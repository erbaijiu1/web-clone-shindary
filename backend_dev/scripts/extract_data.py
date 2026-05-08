import os
import sys
import re
from html.parser import HTMLParser

class ShindaryParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.categories = []
        self.current_category = None
        self.in_sub_nav = False
        self.in_nav_content = False
        self.in_li = False
        self.in_show2 = False
        self.in_p = False
        
        self.products = []
        self.in_product_list = False
        self.in_img_div = False
        self.in_tupian_a = False
        self.in_led_a = False
        self.current_product = {}

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        # Category Parsing
        if tag == 'div' and attr_dict.get('class') == 'subNavBox':
            self.in_sub_nav = True
        
        if self.in_sub_nav:
            if tag == 'div' and 'subNav' in attr_dict.get('class', ''):
                self.current_category = {'level': 1, 'name': '', 'link': '', 'children': []}
                self.categories.append(self.current_category)
            elif tag == 'ul' and 'navContent' in attr_dict.get('class', ''):
                self.in_nav_content = True
            elif tag == 'li' and self.in_nav_content:
                self.in_li = True
                self.current_category = {'level': 2, 'name': '', 'link': '', 'children': []}
                if len(self.categories) > 0:
                    self.categories[-1]['children'].append(self.current_category)
            elif tag == 'div' and 'show2' in attr_dict.get('class', ''):
                self.in_show2 = True
            elif tag == 'p' and self.in_show2:
                self.in_p = True
                self.current_category = {'level': 3, 'name': '', 'link': ''}
                if len(self.categories) > 0 and len(self.categories[-1]['children']) > 0:
                    self.categories[-1]['children'][-1]['children'].append(self.current_category)
            elif tag == 'a':
                if self.in_p and self.current_category and self.current_category['level'] == 3:
                    self.current_category['link'] = attr_dict.get('href', '')
                    self.current_category['name'] = attr_dict.get('title', '')
                elif self.in_li and not self.in_show2 and self.current_category and self.current_category['level'] == 2:
                    self.current_category['link'] = attr_dict.get('href', '')
                    self.current_category['name'] = attr_dict.get('title', '')
                elif self.current_category and self.current_category['level'] == 1 and 'subNav' in str(self.last_tag_attrs):
                    self.current_category['link'] = attr_dict.get('href', '')
                    self.current_category['name'] = attr_dict.get('title', '')
        
        # Product parsing
        if tag == 'ul' and attr_dict.get('class') == 'fix':
            self.in_product_list = True
        
        if self.in_product_list:
            if tag == 'li':
                self.current_product = {}
                self.products.append(self.current_product)
            elif tag == 'div' and attr_dict.get('class') == 'img':
                self.in_img_div = True
            elif tag == 'a' and self.in_img_div:
                if 'tupian' in attr_dict.get('class', ''):
                    self.in_tupian_a = True
                    self.current_product['link'] = attr_dict.get('href', '')
                elif 'led' in attr_dict.get('class', ''):
                    self.in_led_a = True
                    self.current_product['name'] = attr_dict.get('title', '')
            elif tag == 'img' and self.in_tupian_a:
                if 'image_url' not in self.current_product:
                    self.current_product['image_url'] = attr_dict.get('src', '')

        self.last_tag_attrs = attr_dict

    def handle_endtag(self, tag):
        if tag == 'div' and self.in_sub_nav:
            # Not accurately tracking div closures, so we rely on structure
            pass
        if tag == 'ul' and self.in_nav_content:
            self.in_nav_content = False
        if tag == 'li':
            self.in_li = False
        if tag == 'div' and self.in_show2:
            self.in_show2 = False
        if tag == 'p':
            self.in_p = False
        
        if tag == 'ul' and self.in_product_list:
            self.in_product_list = False
        if tag == 'div' and self.in_img_div:
            self.in_img_div = False
        if tag == 'a':
            self.in_tupian_a = False
            self.in_led_a = False

def extract_categories(html_content):
    parser = ShindaryParser()
    parser.feed(html_content)
    return parser.categories

def extract_products(html_content):
    parser = ShindaryParser()
    parser.feed(html_content)
    # Filter empty products
    return [p for p in parser.products if p.get('name')]

def generate_sql(categories, products):
    sql = """
CREATE DATABASE IF NOT EXISTS shindary_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE shindary_db;

CREATE TABLE IF NOT EXISTS sites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    site_code VARCHAR(50) UNIQUE,
    domain VARCHAR(255),
    name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    site_id INT,
    parent_id INT,
    name VARCHAR(255),
    name_en VARCHAR(255),
    name_es VARCHAR(255),
    slug VARCHAR(255),
    image_url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (site_id) REFERENCES sites(id),
    FOREIGN KEY (parent_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    site_id INT,
    category_id INT,
    name VARCHAR(255),
    name_en VARCHAR(255),
    name_es VARCHAR(255),
    slug VARCHAR(255),
    description TEXT,
    part_number VARCHAR(100),
    oem_number VARCHAR(100),
    car_model VARCHAR(255),
    image_url VARCHAR(255),
    FOREIGN KEY (site_id) REFERENCES sites(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Insert Default Site
INSERT IGNORE INTO sites (id, site_code, domain, name) VALUES (1, 'shindary', 'www.shindary.com', 'Shindary Auto Parts');

"""
    # Generate Categories SQL
    cat_id_counter = 1
    def process_category(cat_list, parent_id):
        nonlocal cat_id_counter, sql
        for cat in cat_list:
            if not cat['name']:
                continue
            safe_name = cat['name'].replace("'", "''")
            safe_slug = cat['link'].split('/')[-2] if '/' in cat['link'] else 'cat_' + str(cat_id_counter)
            sql += f"INSERT INTO categories (id, site_id, parent_id, name, slug) VALUES ({cat_id_counter}, 1, {parent_id}, '{safe_name}', '{safe_slug}');\n"
            current_id = cat_id_counter
            cat_id_counter += 1
            if 'children' in cat and cat['children']:
                process_category(cat['children'], current_id)
                
    process_category(categories, 'NULL')
    
    # Generate Products SQL
    sql += "\n-- Insert Products\n"
    for idx, prod in enumerate(products, start=1):
        safe_name = prod.get('name', '').replace("'", "''")
        safe_slug = prod.get('link', '').split('/')[-1].replace('.html', '')
        safe_img = prod.get('image_url', '').replace("'", "''")
        # Assign to category 1 as default for now
        sql += f"INSERT INTO products (id, site_id, category_id, name, slug, image_url) VALUES ({idx}, 1, 1, '{safe_name}', '{safe_slug}', '{safe_img}');\n"
        
    return sql

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    products_index = os.path.join(base_dir, 'products', 'index.html')
    
    if os.path.exists(products_index):
        with open(products_index, 'r', encoding='utf-8') as f:
            content = f.read()
        
        categories = extract_categories(content)
        products = extract_products(content)
        
        sql_content = generate_sql(categories, products)
        sql_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'init_db.sql')
        with open(sql_file_path, 'w', encoding='utf-8') as f:
            f.write(sql_content)
        print(f"Generated SQL file at {sql_file_path}")
    else:
        print(f"File not found: {products_index}")


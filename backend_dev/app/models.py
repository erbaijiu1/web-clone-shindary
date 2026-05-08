from datetime import datetime

from sqlalchemy import Column, Integer, String, Text, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class Site(Base):
    __tablename__ = 'sites'
    id = Column(Integer, primary_key=True, index=True)
    site_code = Column(String(50), unique=True, index=True)
    domain = Column(String(255))
    name = Column(String(100))
    
    categories = relationship("Category", back_populates="site")
    products = relationship("Product", back_populates="site")
    articles = relationship("Article", back_populates="site")

class Category(Base):
    __tablename__ = 'categories'
    id = Column(Integer, primary_key=True, index=True)
    site_id = Column(Integer, ForeignKey('sites.id'))
    parent_id = Column(Integer, ForeignKey('categories.id'), nullable=True)
    name = Column(String(255))
    name_en = Column(String(255), nullable=True)
    name_es = Column(String(255), nullable=True)
    slug = Column(String(255), index=True)
    image_url = Column(String(255), nullable=True)
    description = Column(Text, nullable=True)
    
    site = relationship("Site", back_populates="categories")
    parent = relationship("Category", remote_side=[id], backref="subcategories")
    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True, index=True)
    site_id = Column(Integer, ForeignKey('sites.id'))
    category_id = Column(Integer, ForeignKey('categories.id'))
    name = Column(String(255))
    name_en = Column(String(255), nullable=True)
    name_es = Column(String(255), nullable=True)
    slug = Column(String(255), index=True)
    description = Column(Text, nullable=True)
    part_number = Column(String(100), nullable=True)
    oem_number = Column(String(100), nullable=True)
    car_model = Column(String(255), nullable=True)
    image_url = Column(String(255), nullable=True)
    
    site = relationship("Site", back_populates="products")
    category = relationship("Category", back_populates="products")
    images = relationship("ProductImage", back_populates="product")

class ProductImage(Base):
    __tablename__ = 'product_images'
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    image_url = Column(String(255))
    is_main = Column(Boolean, default=False)
    
    product = relationship("Product", back_populates="images")


class Article(Base):
    __tablename__ = 'articles'

    id = Column(Integer, primary_key=True, index=True)
    site_id = Column(Integer, ForeignKey('sites.id'))
    title = Column(String(255), nullable=False)
    slug = Column(String(255), index=True, nullable=False)
    excerpt = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    image_url = Column(String(255), nullable=True)
    published_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    is_featured = Column(Boolean, default=False)
    sort_order = Column(Integer, default=0)

    site = relationship("Site", back_populates="articles")

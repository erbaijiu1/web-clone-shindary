from copy import deepcopy


ABOUT_PAGE_BY_SITE = {
    "shindary": {
        "seo": {
            "title": "BYD, Changan, Chery, Chevrolet, DFSK, FOTON, Great Wall Auto Spare Parts, for sale",
            "keywords": ":JAC A/C compressor Assy, Brilliance FR DOOR, BAIC Oxygen Sensor",
            "description": "Find here details of Shindary selling BYD, Changan, Chery, Chevrolet, DFSK, FOTON, Great Wall Auto Spare Parts and other brands , with super quality and competitive price. Our company is a leader in the industry and we will not disappoint you. Waiting for your calling. and we will send you our price list.",
            "og_title": "BYD, Changan, Chery, Chevrolet, DFSK, FOTON, Great Wall Auto Spare Parts, for sale",
            "og_description": "Find here details of Shindary selling BYD, Changan, Chery, Chevrolet, DFSK, FOTON, Great Wall Auto Spare Parts and other brands , with super quality and competitive price. Our company is a leader in the industry and we will not disappoint you. Waiting for your calling. and we will send you our price list.",
            "og_image": "https://www.shindary.com/logo.png",
            "og_url": "https://www.shindary.com/about-us/",
            "og_site_name": "Shindary Automotive Parts Co., Ltd."
        },
        "page_title": "About Us",
        "sidebar_links": [
            {"label": "Company Profile", "href": "/company-profile", "external": False, "active": True},
            {"label": "Our Culture", "href": "/our-culture", "external": False, "active": False},
            {"label": "Our Service", "href": "/our-service", "external": False, "active": False},
            {"label": "Sales Network", "href": "/sales-network", "external": False, "active": False},
            {"label": "Our Team", "href": "/our-team", "external": False, "active": False},
            {"label": "Video", "href": "/video", "external": False, "active": False}
        ],
        "intro": [
            "Shindary Automotive Parts Co., Limited was founded in 2008 in Chongqing, the automotive hub of China. Over more than a decade, the company has focused on import and export trade of automotive components, complete vehicles and spare parts, backed by specialized export packaging and project support.",
            "The company now operates with a professional team of more than 100 people and a warehouse center of over 5000 square meters. Its catalogue covers more than 40000 items across 12 competitive Chinese automotive brands and six major vulnerable-parts series.",
            "Shindary works with distributors and dealers in more than 80 countries, providing OEM and high-quality replacement parts for Chinese and international vehicle brands."
        ],
        "brand_lines": [
            "CHANA, CHERY, JINBEI, CHANGHE, HAFEI, GREAT WALL, GEELY, BYD, WULING, ZOTYE, LIFAN, JMC, ZX AUTO, LANDWIND, FAW",
            "CHEVROLET, FORD, NISSAN, HYUNDAI, KIA, TOYOTA, SUZUKI, VW"
        ],
        "sections": [
            {
                "title": "Company Profile",
                "body": [
                    "Shindary represented six system-parts brands from trustworthy factories and turned them into stable supply lines with export-grade quality control.",
                    "The company keeps a practical balance between OEM support, aftermarket replacement parts and customized packaging for overseas distribution projects."
                ],
                "image": "/shindary_static/migrated/about/company-profile.jpg",
                "image_alt": "Company profile"
            },
            {
                "title": "System Parts Brands",
                "body": [
                    "DERY, PORSTEC, OSTECH, TIMCO, MORUND and COOPATER represent Shindary's system-parts supply capability and long-term factory relationships.",
                    "The portfolio is positioned around stable sourcing, product consistency and export service support."
                ],
                "image": "/shindary_static/migrated/about/system-brands.webp",
                "image_alt": "System parts brands"
            },
            {
                "title": "Certificates",
                "body": [
                    "Shindary maintains qualification and certification materials to support supplier trust, dealer onboarding and international trade compliance.",
                    "These credentials help standardize cooperation with overseas partners and project-based procurement teams."
                ],
                "image": "/shindary_static/migrated/about/certificates.webp",
                "image_alt": "Certificates"
            },
            {
                "title": "Development History",
                "body": [
                    "From its founding in Chongqing to multi-country distribution, Shindary has grown by gradually expanding product breadth, warehouse capacity and export coverage.",
                    "Its business evolution reflects both domestic parts expertise and growing overseas channel integration."
                ],
                "image": "/shindary_static/migrated/about/development-history.webp",
                "image_alt": "Development history"
            },
            {
                "title": "Management Frame",
                "body": [
                    "The management structure supports category coordination, export sales, warehouse execution and customer-response workflows.",
                    "This operating frame is designed to keep product sourcing, quotation response and shipment follow-up aligned."
                ],
                "image": "/shindary_static/migrated/about/management-frame.webp",
                "image_alt": "Management frame"
            },
            {
                "title": "Our Team",
                "body": [
                    "A team of more than 100 specialists supports the company across sourcing, sales, packaging, logistics and after-sales communication.",
                    "Shindary positions its team as a long-term service extension for importers, distributors and project buyers."
                ],
                "image": "/shindary_static/migrated/about/our-team.webp",
                "image_alt": "Our team"
            }
        ]
    }
}


def get_about_page_payload(site_code: str):
    payload = ABOUT_PAGE_BY_SITE.get(site_code)
    if payload is None:
        return None
    return deepcopy(payload)
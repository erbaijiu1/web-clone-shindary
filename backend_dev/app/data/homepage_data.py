from copy import deepcopy


HOMEPAGE_BY_SITE = {
    "shindary": {
        "site_name": "Shindary Automotive Parts Co., Ltd.",
        "seo": {
            "title": "Shindary Automotive Parts Co., Ltd.",
            "keywords": "Car Spare Parts Manufacturer, Auto Spare Parts, Auto System Components, Hot Models Car Parts",
            "description": "China auto parts expert covering 5000sqm warehouse capacity, 400000 plus auto parts products and exports to more than 80 markets.",
            "og_title": "Shindary Automotive Parts Co., Ltd.",
            "og_description": "China auto parts expert for CHANA, CHERY, Geely, JAC and more.",
            "og_image": "/shindary_static/migrated/home/hero-5.jpg",
            "og_url": "https://www.shindary.com/",
            "og_site_name": "Shindary Automotive Parts Co., Ltd."
        },
        "primary_nav": [
            {"label": "Home", "href": "/", "children": []},
            {
                "label": "About Us",
                "href": "/about-us",
                "children": [
                    {"label": "Company Profile", "href": "/company-profile"},
                    {"label": "Our Culture", "href": "/our-culture"},
                    {"label": "Our Service", "href": "/our-service"},
                    {"label": "Sales Network", "href": "/sales-network"},
                    {"label": "Our Team", "href": "/our-team"},
                    {"label": "Video", "href": "/video"}
                ]
            },
            {
                "label": "Products",
                "href": "/products",
                "children": [
                    {"label": "Selected Parts", "href": "/selected-parts"},
                    {"label": "Hot Models", "href": "/hot-models"},
                    {"label": "Commercial", "href": "/commercial"},
                    {"label": "Hot Selling", "href": "/hot-selling"},
                    {"label": "System Components", "href": "/system-components"},
                    {"label": "New Products", "href": "/new-products"},
                    {"label": "Equipment & Parts for EV", "href": "/equipment-parts-for-ev"},
                    {"label": "Industrial Machinery Parts", "href": "/industrial-machinery-parts"},
                    {"label": "Modified Parts & Accessories", "href": "/modified-parts-accessories"},
                    {"label": "Supply Chain Equipment", "href": "/supply-chain-equipment"}
                ]
            },
            {"label": "News", "href": "/news", "children": []},
            {
                "label": "Customer Center",
                "href": "/customer-center",
                "children": [
                    {"label": "Download", "href": "/download"},
                    {"label": "CS System", "href": "http://218.70.9.34:8060/SDRCRM/SignOn.asp", "external": True}
                ]
            },
            {"label": "Contact Us", "href": "/contact", "children": []}
        ],
        "language_links": [
            {"label": "EN", "href": "/", "active": True}
        ],
        "hero_slides": [
            {
                "title": "China Auto Parts Expert, CHANA, CHERY, Geely, JAC",
                "href": "/about-us",
                "image": "/shindary_static/migrated/home/hero-1.jpg",
                "mobile_image": "/shindary_static/migrated/home/hero-1.jpg",
                "alt": "China Auto Parts Expert, CHANA, CHERY, Geely, JAC"
            },
            {
                "title": "Auto Radiator, Auto Parts, China Car",
                "href": "/radiator",
                "image": "/shindary_static/migrated/home/hero-2.jpg",
                "mobile_image": "/shindary_static/migrated/home/hero-2.jpg",
                "alt": "Auto radiator, auto parts, China car"
            },
            {
                "title": "Clutch, Auto Parts",
                "href": "/clutch-kit",
                "image": "/shindary_static/migrated/home/hero-3.jpg",
                "mobile_image": "/shindary_static/migrated/home/hero-3.jpg",
                "alt": "Clutch, auto parts"
            },
            {
                "title": "Shock Absorber, Auto Parts",
                "href": "/shock-absorber",
                "image": "/shindary_static/migrated/home/hero-4.jpg",
                "mobile_image": "/shindary_static/migrated/home/hero-4.jpg",
                "alt": "Shock absorber, auto parts"
            },
            {
                "title": "Chinese Auto Parts",
                "href": "/contact",
                "image": "/shindary_static/migrated/home/hero-5.jpg",
                "mobile_image": "/shindary_static/migrated/home/hero-5.jpg",
                "alt": "Chinese auto parts"
            }
        ],
        "profile": {
            "title": "Company Profile",
            "href": "/about-us",
            "summary": "5000sqm warehouse center, 400000 plus auto parts products, 80 plus dealer cooperation and 80 plus export markets.",
            "features": [
                {
                    "title": "Our Culture",
                    "description": "Serve for your values",
                    "href": "/about-us",
                    "icon": "/shindary_static/migrated/home/feature-culture.png",
                    "hover_icon": "/shindary_static/migrated/home/feature-culture-hover.png"
                },
                {
                    "title": "Our Team",
                    "description": "100 plus professional team",
                    "href": "/about-us",
                    "icon": "/shindary_static/migrated/home/feature-team.png",
                    "hover_icon": "/shindary_static/migrated/home/feature-team-hover.png"
                },
                {
                    "title": "Our Service",
                    "description": "Professional export package",
                    "href": "/about-us",
                    "icon": "/shindary_static/migrated/home/feature-service.png",
                    "hover_icon": "/shindary_static/migrated/home/feature-service-hover.png"
                }
            ]
        },
        "brands": {
            "title": "Brands We Serve",
            "href": "/products",
            "items": [
                {"title": "ChangAn", "href": "/changan-chana", "image": "/shindary_static/migrated/home/brand-changan.webp"},
                {"title": "CHERY", "href": "/chery", "image": "/shindary_static/migrated/home/brand-chery.webp"},
                {"title": "Dongfeng", "href": "/dongfeng", "image": "/shindary_static/migrated/home/brand-dongfeng.webp"},
                {"title": "Jac", "href": "/jac", "image": "/shindary_static/migrated/home/brand-jac.webp"},
                {"title": "Greatwall", "href": "/greatwall", "image": "/shindary_static/migrated/home/brand-greatwall.webp"},
                {"title": "CHEVROLET", "href": "/chevrolet", "image": "/shindary_static/migrated/home/brand-chevrolet.webp"},
                {"title": "GEELY", "href": "/geely", "image": "/shindary_static/migrated/home/brand-geely.webp"},
                {"title": "BYD", "href": "/byd", "image": "/shindary_static/migrated/home/brand-byd.webp"},
                {"title": "ford", "href": "/ford", "image": "/shindary_static/migrated/home/brand-ford.webp"},
                {"title": "nissan", "href": "/nissan", "image": "/shindary_static/migrated/home/brand-nissan.webp"},
                {"title": "HYUNDAI", "href": "/hyundai", "image": "/shindary_static/migrated/home/brand-hyundai.webp"},
                {"title": "KIA", "href": "/kia", "image": "/shindary_static/migrated/home/brand-kia.webp"},
                {"title": "Isuzu", "href": "/isuzu", "image": "/shindary_static/migrated/home/brand-isuzu.webp"}
            ]
        },
        "product_tabs": [
            {
                "label": "Selected Parts",
                "items": [
                    {"title": "Brake Disc 51712-C1000 for HYUNDAI", "href": "/brake-disc/brake-disc-51712-c1000-for-hyundai", "image": "/shindary_static/migrated/home/selected-1.webp"},
                    {"title": "Radiator S111301110CA for CHERY", "href": "/part-number23/radiator-s111301110ca-for-chery", "image": "/shindary_static/migrated/home/selected-2.webp"},
                    {"title": "Ball Joint R 2904100XPW01A for GREAT WALL POER", "href": "/ball-joint/ball-joint-r-2904100xpw01a-for-great-wall-poer", "image": "/shindary_static/migrated/home/selected-3.webp"},
                    {"title": "Front Stabilizer Shaft Link Assy L 7701023433068 for FOTON TUNLAND", "href": "/part-number24/front-stabilizer-shaft-link-assy-l-7701023433068-for-foton-tunland", "image": "/shindary_static/migrated/home/selected-4.webp"},
                    {"title": "Clutch Press Plate 1601002XPW01A-01 for GREAT WALL POER", "href": "/part-number28/clutch-press-plate-1601002xpw01a-01-for-great-wall-poer", "image": "/shindary_static/migrated/home/selected-5.webp"},
                    {"title": "Front Shock Absorber L 546501R071 for HYUNDAI ACCENT", "href": "/part-number26/front-shock-absorber%EF%BC%8Cl-546501r071-for-hyundai-accent", "image": "/shindary_static/migrated/home/selected-6.webp"},
                    {"title": "Control Arm UC2R34250D for MAZDA BT-50", "href": "/part-number25/control-arm-uc2r34250d-for-mazda-bt-50", "image": "/shindary_static/migrated/home/selected-7.webp"},
                    {"title": "Brake Drum 58411-1C010 for HYUNDAI", "href": "/brake-drum/brake-drum-58411-1c010-for-hyundai", "image": "/shindary_static/migrated/home/selected-8.webp"}
                ]
            },
            {
                "label": "Hot Models",
                "items": [
                    {"title": "Automotive parts for DONGFENG SX6", "href": "/sx6/automotive-parts-for-dongfeng-sx6-1", "image": "/shindary_static/migrated/home/hot-model-1.webp"},
                    {"title": "Spare parts for GREATWALL HAVAL JOLION", "href": "/haval-jolion/spare-parts-for-greatwall-haval-jolion", "image": "/shindary_static/migrated/home/hot-model-2.webp"},
                    {"title": "Spare parts for GREATWALL F7", "href": "/f7/spare-parts-for-greatwall-f7", "image": "/shindary_static/migrated/home/hot-model-3.webp"},
                    {"title": "Spare parts for Geely Coolray", "href": "/coolray/spare-parts-for-geely-coolray", "image": "/shindary_static/migrated/home/hot-model-4.webp"},
                    {"title": "Spare parts for BYD NEW E2", "href": "/new-e2/spare-parts-for-byd-new-e2", "image": "/shindary_static/migrated/home/hot-model-5.webp"},
                    {"title": "Spare parts for BYD ATTO3", "href": "/atto3/spare-parts-for-byd-atto3", "image": "/shindary_static/migrated/home/hot-model-6.webp"},
                    {"title": "Auto spare parts for NEW SAIL", "href": "/new-sail/auto-spare-parts-for-new-sail", "image": "/shindary_static/migrated/home/hot-model-7.webp"},
                    {"title": "Spare parts for CHEVROLET CAPTIVA", "href": "/captiva/spare-parts-for-chevrolet-captiva", "image": "/shindary_static/migrated/home/hot-model-8.webp"}
                ]
            },
            {
                "label": "Commercial",
                "items": [
                    {"title": "Spare parts for MAXUS T60", "href": "/t60/spare-parts-for-maxus-t60", "image": "/shindary_static/migrated/home/commercial-1.webp"},
                    {"title": "Spare parts for FOTON TUNLAND", "href": "/tunland-1/spare-parts-for-foton-tunland", "image": "/shindary_static/migrated/home/commercial-2.webp"},
                    {"title": "Spare parts for Great Wall POER", "href": "/poer/spare-parts-for-great-wall-poer", "image": "/shindary_static/migrated/home/commercial-3.webp"},
                    {"title": "Spare parts for Great Wall Wingle 5", "href": "/wingle-5-1/spare-parts-for-great-wall-wingle-5", "image": "/shindary_static/migrated/home/commercial-4.webp"},
                    {"title": "Spare parts for CHANGAN HUNTER", "href": "/hunter-1/spare-parts-for-changan-hunter", "image": "/shindary_static/migrated/home/commercial-5.webp"},
                    {"title": "Spare parts for GreatWall Wingle 7", "href": "/wingle-7-1/spare-parts-for-greatwall-wingle-7", "image": "/shindary_static/migrated/home/commercial-6.webp"},
                    {"title": "Spare parts for JAC T8", "href": "/t8/spare-parts-for-jac-t8", "image": "/shindary_static/migrated/home/commercial-7.webp"},
                    {"title": "Spare parts for ISUZU D-MAX", "href": "/d-max-1/spare-parts-for-isuzu-d-max", "image": "/shindary_static/migrated/home/commercial-8.webp"}
                ]
            },
            {
                "label": "Hot Selling",
                "items": [
                    {"title": "Starter 36100-11140 for HYUNDAI", "href": "/hot-selling/59641", "image": "/shindary_static/migrated/home/hot-selling-1.webp"},
                    {"title": "Generator 31400-85Z00 for CHEVROLET", "href": "/hot-selling/59640", "image": "/shindary_static/migrated/home/hot-selling-2.webp"},
                    {"title": "Starter 3610023160 for HYUNDAI TUCSON", "href": "/hot-selling/59635", "image": "/shindary_static/migrated/home/hot-selling-3.webp"},
                    {"title": "Air filter PE07133A0A for MAZDA", "href": "/hot-selling/59631", "image": "/shindary_static/migrated/home/hot-selling-4.webp"},
                    {"title": "Compressor 977012S601 for KIA", "href": "/hot-selling/compressor-977012s601-for-kia", "image": "/shindary_static/migrated/home/hot-selling-5.webp"},
                    {"title": "Starting machine 8941566711 for CHEVROLET", "href": "/hot-selling/starting-machine-8941566711-for-chevrolet", "image": "/shindary_static/migrated/home/hot-selling-6.webp"},
                    {"title": "Generator OK30D18300 for KIA", "href": "/hot-selling/generator-ok30d18300-for-kia", "image": "/shindary_static/migrated/home/hot-selling-7.webp"},
                    {"title": "Front control arm ball joint pin assy A21-2909060BB for CHERY", "href": "/hot-selling/front-control-arm-ball-joint-pin-assy-a21-2909060bb-for-chery", "image": "/shindary_static/migrated/home/hot-selling-8.webp"}
                ]
            }
        ],
        "news": {
            "title": "Latest News",
            "href": "/news",
            "items": [
                {
                    "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR STEERING SYSTEM",
                    "href": "/news/shindary-productsspare-parts-numbers-for-steering-system-51",
                    "excerpt": "Following sheet is part codes catalogue for steering system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
                    "image": "/shindary_static/migrated/home/news-1.webp"
                },
                {
                    "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR BRAKING SYSTEM",
                    "href": "/news/shindary-productsspare-parts-numbers-for-braking-system-51",
                    "excerpt": "Following sheet is part codes catalogue for braking system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
                    "image": "/shindary_static/migrated/home/news-2.webp"
                },
                {
                    "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR TIMING SYSTEM",
                    "href": "/news/shindary-productsspare-parts-numbers-for-timing-system-51",
                    "excerpt": "Following sheet is part codes catalogue for timing system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
                    "image": "/shindary_static/migrated/home/news-3.webp"
                }
            ]
        },
        "contact": {
            "company": "Shindary Automotive Parts Co., Ltd.",
            "address": "Rm.11-12, 4th Tower, Daya Jinkai Int'l Plaza, No.1230, Jinkai Ave., New North Zone, Chongqing, China.",
            "phone": "+86 23 6305 1623",
            "fax": "+86 23 6320 5611",
            "email": "overseas@shindary.com",
            "whatsapp": ["+8615823303378", "+8613667664312"]
        },
        "footer_groups": [
            {
                "title": "Products",
                "links": [
                    {"label": "Selected Parts", "href": "/selected-parts"},
                    {"label": "Hot Models", "href": "/hot-models"},
                    {"label": "Commercial", "href": "/commercial"},
                    {"label": "Hot Selling", "href": "/hot-selling"},
                    {"label": "System Components", "href": "/system-components"},
                    {"label": "New Products", "href": "/new-products"}
                ]
            },
            {
                "title": "Navigation",
                "links": [
                    {"label": "Home", "href": "/"},
                    {"label": "About Us", "href": "/about-us"},
                    {"label": "Products", "href": "/products"},
                    {"label": "News", "href": "/news"},
                    {"label": "Customer Center", "href": "/customer-center"},
                    {"label": "Contact Us", "href": "/contact"},
                    {"label": "Sitemap", "href": "/sitemap.xml"}
                ]
            },
            {
                "title": "Links",
                "links": [
                    {"label": "Car Spare Parts Manufacturer", "href": "/"},
                    {"label": "Auto Spare Parts", "href": "/competitive-products"},
                    {"label": "Auto System Components", "href": "/system-components"},
                    {"label": "Hot Models Car Parts", "href": "/hot-models"}
                ]
            }
        ],
        "social_links": [
            {"label": "Facebook", "href": "https://www.facebook.com/Shindaryautoparts", "external": True},
            {"label": "LinkedIn", "href": "https://www.linkedin.com/company/35643554/admin/", "external": True},
            {"label": "Instagram", "href": "https://www.instagram.com/shindary_autoparts/", "external": True},
            {"label": "YouTube", "href": "https://www.youtube.com/embed/J0m0xotO5fk", "external": True}
        ],
        "floating_actions": [
            {"label": "WhatsApp", "href": "https://api.whatsapp.com/send?phone=8615823303378", "description": "+8615823303378", "external": True},
            {"label": "Email", "href": "mailto:overseas@shindary.com", "description": "overseas@shindary.com", "external": True},
            {"label": "Contact", "href": "/contact", "description": "Contact Us", "external": False}
        ]
    }
}


def get_homepage_payload(site_code: str):
    payload = HOMEPAGE_BY_SITE.get(site_code)
    if payload is None:
        return None
    return deepcopy(payload)
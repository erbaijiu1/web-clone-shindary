from copy import deepcopy


ABOUT_SUBPAGE_SIDEBAR = [
    {"label": "Company Profile", "href": "/company-profile", "external": False, "active": False},
    {"label": "Our Culture", "href": "/our-culture", "external": False, "active": False},
    {"label": "Our Service", "href": "/our-service", "external": False, "active": False},
    {"label": "Sales Network", "href": "/sales-network", "external": False, "active": False},
    {"label": "Our Team", "href": "/our-team", "external": False, "active": False},
    {"label": "Video", "href": "/video", "external": False, "active": False}
]


TEAM_GALLERY_BASE = "/shindary_static/migrated/about/our-team"


def _gallery_images(items):
    return [
        {
            "image": f"{TEAM_GALLERY_BASE}/{filename}",
            "alt": caption,
            "caption": caption
        }
        for filename, caption in items
    ]


SHINDARY_OUR_TEAM_GALLERY = [
    {
        "title": "2025 Annual Meeting",
        "images": _gallery_images([
            ("698bf2558e80c.jpg", "2025 Annual Meeting"),
            ("698bf23a4b0e7.jpg", "2025 Annual Meeting"),
            ("698bf22348dad.jpg", "2025 Annual Meeting"),
            ("698bf20c31c6b.jpg", "2025 Annual Meeting"),
            ("698bf1f25077e.jpg", "2025 Annual Meeting"),
            ("698bf1d8112fe.jpg", "2025 Annual Meeting"),
            ("698bf11f93526.jpg", "2025 Annual Meeting"),
            ("698bf0f5ba4b2.jpg", "2025 Annual Meeting"),
            ("698bf0ddc2d98.jpg", "2025 Annual Meeting"),
            ("698bf0b3adb7a.jpg", "2025 Annual Meeting"),
            ("698bf075d6d58.jpg", "2025 Annual Meeting")
        ])
    },
    {
        "title": "Relocation Celebration",
        "images": _gallery_images([
            ("695b78924922f.jpg", "Relocation celebration"),
            ("695b75b70bde3.jpg", "Relocation celebration"),
            ("695b7596c4a92.jpg", "Relocation celebration"),
            ("695b75645580f.jpg", "Relocation celebration"),
            ("695b746479478.jpg", "Relocation celebration"),
            ("695b73e64e22d.jpg", "Relocation celebration"),
            ("695b73a65d4c0.jpg", "Relocation celebration")
        ])
    },
    {
        "title": "Annual Meeting 2025",
        "images": _gallery_images([
            ("68819f08648ec.jpg", "Annual Meeting 2025"),
            ("68819efc7ad25.jpg", "Annual Meeting 2025"),
            ("68819eee044c6.jpg", "Annual Meeting 2025"),
            ("68819ee018bc3.jpg", "Annual Meeting 2025"),
            ("68819eb9097d1.jpg", "Annual Meeting 2025"),
            ("68819ea91497d.jpg", "Annual Meeting 2025"),
            ("68819e9b0a900.jpg", "Annual Meeting 2025"),
            ("68819e6e57ea9.jpg", "Annual Meeting 2025"),
            ("68819e5d7d116.jpg", "Annual Meeting 2025"),
            ("68819e5012441.jpg", "Annual Meeting 2025"),
            ("68819e3db1a92.jpg", "Annual Meeting 2025")
        ])
    },
    {
        "title": "2024 Annual Meeting",
        "images": _gallery_images([
            ("6881961a6f00d.jpg", "2024 Annual Meeting"),
            ("68819638e60dc.jpg", "2024 Annual Meeting"),
            ("6881965dbfb24.jpg", "2024 Annual Meeting"),
            ("6881968356d75.jpg", "2024 Annual Meeting"),
            ("688196a8a4da8.jpg", "2024 Annual Meeting"),
            ("688196cd91aaf.jpg", "2024 Annual Meeting")
        ])
    },
    {
        "title": "2022 Shindary 10th Anniversary Party",
        "images": _gallery_images([
            ("688194e4193de.jpg", "2022 Shindary 10th Anniversary Party"),
            ("6881950559895.jpg", "2022 Shindary 10th Anniversary Party"),
            ("68819524487f2.jpg", "2022 Shindary 10th Anniversary Party"),
            ("6881954f24b52.jpg", "2022 Shindary 10th Anniversary Party"),
            ("68819581eb8f4.jpg", "2022 Shindary 10th Anniversary Party")
        ])
    },
    {
        "title": "2019 Team and Warehouse",
        "images": _gallery_images([
            ("688194b584e1d.jpg", "Purchasing Department 2019"),
            ("6881948a60a0b.jpg", "Sales Department 2019"),
            ("6881943eb9adf.jpg", "Shindary team-2019"),
            ("6881941dba0da.jpg", "Shindary team-2019"),
            ("688193ede171d.jpg", "New warehouse 2019"),
            ("688193c170223.jpg", "New warehouse 2019"),
            ("68819384a8d85.jpg", "New warehouse 2019"),
            ("6881935bd52c6.jpg", "New warehouse 2019"),
            ("6881933e4bb45.jpg", "New warehouse 2019")
        ])
    },
    {
        "title": "2018 Activities",
        "images": _gallery_images([
            ("688192eef1e3b.jpg", "Shindary team 2018"),
            ("688192c68fea0.jpg", "Christmas party2-2018"),
            ("6881929b49183.jpg", "Christmas party-2018"),
            ("68819272af2b9.jpg", "Shindary workteam02"),
            ("688192490d0cd.jpg", "Shindary workteam01")
        ])
    },
    {
        "title": "Office, Showroom and Warehouse",
        "images": _gallery_images([
            ("688191ce80d81.jpg", "Shindary warehouse03"),
            ("688191a434959.jpg", "Shindary warehouse02"),
            ("6881917ad5d70.jpg", "Shindary warehouse01"),
            ("68819136958d1.jpg", "Shindary showroom04"),
            ("6881910e134c7.jpg", "Shindary showroom03"),
            ("688190e126ad5.jpg", "Shindary showroom02"),
            ("6881909070e5f.jpg", "Shindary showroom01"),
            ("688190541ac09.jpg", "Shindary office02"),
            ("6881901a86a37.jpg", "Shindary office01")
        ])
    }
]


ABOUT_SUBPAGES_BY_SITE = {
    "shindary": {
        "company-profile": {
            "seo": {
                "title": "GEELY Cooling Fans＆Front Bumper, BAIC Oxygen Sensor & Fuel Pump Supplier China",
                "keywords": "GEELY Steering Ball Head, JAC Engine Hood, JINBEI Clutch Release Bearing",
                "description": "Shindary wholesale GEELY cooling fans＆front bumper, BAIC oxygen sensor & fuel pump. The products is strictly tested in all process from contact signing, raw material purchasing, to inspection and after sale service.",
                "og_title": "GEELY Cooling Fans＆Front Bumper, BAIC Oxygen Sensor & Fuel Pump Supplier China",
                "og_description": "Shindary wholesale GEELY cooling fans＆front bumper, BAIC oxygen sensor & fuel pump. The products is strictly tested in all process from contact signing, raw material purchasing, to inspection and after sale service.",
                "og_image": "https://www.shindary.com/logo.png",
                "og_url": "https://www.shindary.com/company-profile/",
                "og_site_name": "Shindary Automotive Parts Co., Ltd."
            },
            "page_title": "Company Profile",
            "content_title": "COMPANY PROFILE",
            "content_html": "<p>Formed professional work team for export of auto and parts accessories since 2008.</p><p>Established cooperation in KD and spare parts with car distributors and parts importers in more than 60 countries.</p><p>Exclusive and strategic partners for many famous Chinese parts manufacturers like Donen, Bright, Senort and Huabo.</p><p>Professional and leading supplier for OEM parts and high quality replacement parts of Chinese brand cars and foreign brand cars, such as:</p><p><span style='color:#1051a1;'>CHANA, CHERY, JINBEI, CHANGHE, HAFEI, GREAT WALL, GEELY, BYD, WULING, ZOTYE, LIFAN, JMC, ZX AUTO, LANDWIND, FAW...</span></p><p><span style='color:#1051a1;'>CHEVROLET, FORD, NISSAN, HYUNDAI, KIA, TOYOTA, SUZUKI, VW...</span></p><p><img src='/migrated/about/company-profile.jpg' alt='Company Profile' /></p><p>Shindary represented 6 system parts brands, DERY, PORSTEC, OSTECH, TIMCO, MORUND and COOPATER from trustworthy factories. They are the symbols of Shindary's quality and service.</p><h2>System Parts Brands</h2><p><img src='/migrated/about/system-brands.webp' alt='System Parts Brands' /></p><p>Stepping into the new century, facing economic globalization today, Shindary will be more courageous and confident. We will not only provide customers with more value-added products and services, but also make a contribution to the development of domestic and overseas automotive industry.</p><p>Shindary, create and share the future with you!</p><h2>Certificates</h2><p><img src='/migrated/about/certificates.webp' alt='Certificates' /></p><h2>Development History</h2><p><img src='/migrated/about/development-history.webp' alt='Development History' /></p><h2>Management Frame</h2><p><img src='/migrated/about/management-frame.webp' alt='Management Frame' /></p><h2>Our Team</h2><p><img src='/migrated/about/our-team.webp' alt='Our Team' /></p>"
        },
        "our-service": {
            "seo": {
                "title": "Brilliance FR DOOR & Engine Hood, Changan & Chana Fan Assy, Head Lamp, Expoter China",
                "keywords": "CHERY Tension Pulley, Brilliance Engine Hood, Dongfeng Oil Pump",
                "description": "We mainly produce products such as Brilliance FR DOOR & Engine Hood. If request by customer, we can provide reliable after sales parts--Replacement parts.",
                "og_title": "Brilliance FR DOOR & Engine Hood, Changan & Chana Fan Assy, Head Lamp, Expoter China",
                "og_description": "We mainly produce products such as Brilliance FR DOOR & Engine Hood. If request by customer, we can provide reliable after sales parts--Replacement parts.",
                "og_image": "https://www.shindary.com/logo.png",
                "og_url": "https://www.shindary.com/our-service/",
                "og_site_name": "Shindary Automotive Parts Co., Ltd."
            },
            "page_title": "Our Service",
            "content_title": "OUR SERVICE",
            "content_html": "<p>We are focusing on provide client full solution plans for spare parts supply for long-term partner relationship.</p><p>We gain good reputation and win customer confidence based on our professional service and parts quality.</p><h2>Professional Export Package</h2><p><img src='/migrated/about/service-package-1.jpg' alt='Professional Export Package' /></p><p><img src='/migrated/about/service-package-2.jpg' alt='Professional Export Package' /></p><p>We are the supplier for full solution plans of <a href='/products'>auto spare parts</a> with professional service and reasonable price to all of our clients.</p><h2>Full options</h2><p><img src='/migrated/about/service-full-options.jpg' alt='Full options' /></p><h2>Quality Control</h2><p>Normally we only provide Genuine parts.</p><p>If requested by customer, we can provide reliable after-sales replacement parts. We will never provide fake parts even with the lowest price. All the auto parts products will be manufactured by qualified factories with ISO 9001 certificate.</p><p>We will inspect the part status, quality and packing quantity before packing in our own warehouse to avoid wrong parts, defect parts and short delivery.</p><h2>Efficient delivery</h2><p>Urgent order: within 6-9 days.</p><p>Normal air order: within 10-15 days.</p><p>Sea order FCL: within 25-35 days.</p><h2>Shipping way</h2><p>1. Air express by DHL, FEDEX, TNT</p><p>2. Common air cargo</p><p>3. Sea order by full container or LCL container</p><h2>Competitive price</h2><p>Based on genuine parts and professional service, our price will not be the lowest, but will be most competitive, about 10-20% lower than many other suppliers.</p><h2>After-sales Guarantee</h2><p>Guarantee: If we send you wrong parts, damaged parts or short delivery during shipment, we will replace you new ones free of charge.</p><h2>Others</h2><p>All your inquiries will be answered within 24 hours. Our mission is to solve the customer's problem. We care much about the needs of customers and do all to support our customers to win in the market.</p>"
        },
        "our-culture": {
            "seo": {
                "title": "JAC Compressor Assy & Engine Hood, Saic Engine Gasket Kit & Head Lamp, Manufacturer China",
                "keywords": "Dongfeng Front Grille, FAW RR Break Pad Kit, GEELY Cooling Fans",
                "description": "Our goal is to become a globally recognized provider of integrated automotive parts services. We specialize in providing our customers with complete spare parts supply solutions for long-term partnerships.",
                "og_title": "JAC Compressor Assy & Engine Hood, Saic Engine Gasket Kit & Head Lamp, Manufacturer China",
                "og_description": "Our goal is to become a globally recognized provider of integrated automotive parts services. We specialize in providing our customers with complete spare parts supply solutions for long-term partnerships.",
                "og_image": "https://www.shindary.com/logo.png",
                "og_url": "https://www.shindary.com/our-culture/",
                "og_site_name": "Shindary Automotive Parts Co., Ltd."
            },
            "page_title": "Our Culture",
            "content_title": "OUR CULTURE",
            "content_html": "<p><img src='/migrated/about/our-culture.webp' alt='Our Culture' /></p><h2>Mission and Vision</h2><p>To be the worldwide well-known integrated auto parts service provider.</p><p>We are focusing on provide client full solution plans for spare parts supply for long-term partner relationship.</p><h2>Operation Principle</h2><p>Pursuit For Excellence Create &amp; Share Future.</p><h2>Enterprise Culture</h2><p>Responsibility</p><p>Surpassing</p><p>Mutual Aid</p><p>Share</p><p>Thanksgiving</p><h2>Managing Philosophy</h2><p>Customer-oriented</p><p>Quality priority</p><p>Service-based</p>"
        },
        "sales-network": {
            "seo": {
                "title": "Dongfeng Clutch plate , JINBEI Clutch Release Bearing & Water Pump, Supplier",
                "keywords": "Brilliance Engine Hood, JINBEI Water Pump, ZOTYE Left Headlamp",
                "description": "We are pleased to deliver Dongfeng clutch plate. Safe payment and on time deliver time will give you. We have rich experience on quality control, project management and comprehensive service.",
                "og_title": "Dongfeng Clutch plate , JINBEI Clutch Release Bearing & Water Pump, Supplier",
                "og_description": "We are pleased to deliver Dongfeng clutch plate. Safe payment and on time deliver time will give you. We have rich experience on quality control, project management and comprehensive service.",
                "og_image": "https://www.shindary.com/logo.png",
                "og_url": "https://www.shindary.com/sales-network/",
                "og_site_name": "Shindary Automotive Parts Co., Ltd."
            },
            "page_title": "Sales Network",
            "content_title": "SALES NETWORK",
            "content_html": "<p><img src='/migrated/about/sales-network.webp' alt='Sales Network' /></p>"
        },
        "our-team": {
            "seo": {
                "title": "Dongfeng Steering Tie Rod & Steering Bar Joint, CHEVROLET Timing Belt, Price",
                "keywords": "CHEVROLET Tail Lamp, GEELY Front Bumper, JAC Engine Hood",
                "description": "Find information here of CHEVROLET timing belt selling companies for your buy requirements. We offer top quality and wide ranges of CHEVROLET timing belt.",
                "og_title": "Dongfeng Steering Tie Rod & Steering Bar Joint, CHEVROLET Timing Belt, Price",
                "og_description": "Find information here of CHEVROLET timing belt selling companies for your buy requirements. We offer top quality and wide ranges of CHEVROLET timing belt.",
                "og_image": "https://www.shindary.com/logo.png",
                "og_url": "https://www.shindary.com/our-team/",
                "og_site_name": "Shindary Automotive Parts Co., Ltd."
            },
            "page_title": "Our Team",
            "content_title": "OUR TEAM",
            "content_html": "<p>Browse the original team gallery, including annual meetings, relocation events, warehouse updates and office highlights.</p>",
            "gallery_sections": SHINDARY_OUR_TEAM_GALLERY
        },
        "video": {
            "seo": {
                "title": "JAC Injector Assy & Compressor Assy, Dongfeng & ZOTYE Left Headlamp & Right Headlamp Supplier",
                "keywords": "Dongfeng Rear Door, Zotye Head Lamp, JAC Injector Assy",
                "description": "Shindary exports JAC injector assy & A/C compressor assy, DFSK & ZOTYE left headlamp & right headlamp. The properties of the product comply with the standard. We can ensure to supply good product and service for the customers.",
                "og_title": "JAC Injector Assy & Compressor Assy, Dongfeng & ZOTYE Left Headlamp & Right Headlamp Supplier",
                "og_description": "Shindary exports JAC injector assy & A/C compressor assy, DFSK & ZOTYE left headlamp & right headlamp. The properties of the product comply with the standard. We can ensure to supply good product and service for the customers.",
                "og_image": "https://www.shindary.com/logo.png",
                "og_url": "https://www.shindary.com/video/",
                "og_site_name": "Shindary Automotive Parts Co., Ltd."
            },
            "page_title": "Video",
            "content_title": "VIDEO",
            "content_html": "<p>Company profile video from the original Shindary site.</p>",
            "video_items": [
                {
                    "title": "Shindary automotive parts profile",
                    "embed_url": "https://www.youtube.com/embed/J0m0xotO5fk",
                    "description": "Company profile video",
                    "external_url": "https://www.youtube.com/watch?v=J0m0xotO5fk"
                }
            ]
        }
    }
}


def get_about_subpage_payload(site_code: str, page_slug: str):
    site_pages = ABOUT_SUBPAGES_BY_SITE.get(site_code)
    if site_pages is None:
        return None
    page = site_pages.get(page_slug)
    if page is None:
        return None

    payload = deepcopy(page)
    sidebar_links = deepcopy(ABOUT_SUBPAGE_SIDEBAR)
    for item in sidebar_links:
        item["active"] = item["href"].strip("/") == page_slug
    payload["sidebar_links"] = sidebar_links
    return payload
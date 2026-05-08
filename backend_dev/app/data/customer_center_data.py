from copy import deepcopy


CUSTOMER_CENTER_BY_SITE = {
    "shindary": {
        "seo": {
            "title": "Wuling Engine Crankshaft, Brake Slave Cylinder, Jinbei Fuel Filter Assy & Clutch Driven Disk, Price ",
            "keywords": "JAC Injector Assy, ZOTYE Right Headlamp, FAW RR Break Pad Kit",
            "description": "Stepping into the new century, facing of economic globalization today, Shindary will be more courageous and confident. Our Jinbei Fuel Filter Assy & Clutch Driven Disk has quality assurance. We warmly welcome domestic and foreign merchants to discuss cooperation and grow together.",
            "og_title": "Wuling Engine Crankshaft, Brake Slave Cylinder, Jinbei Fuel Filter Assy & Clutch Driven Disk, Price ",
            "og_description": "Stepping into the new century, facing of economic globalization today, Shindary will be more courageous and confident. Our Jinbei Fuel Filter Assy & Clutch Driven Disk has quality assurance. We warmly welcome domestic and foreign merchants to discuss cooperation and grow together.",
            "og_image": "https://www.shindary.com/logo.png",
            "og_url": "https://www.shindary.com/customer-center/",
            "og_site_name": "Shindary Automotive Parts Co., Ltd."
        },
        "page_title": "Customer Center",
        "cs_system_url": "http://218.70.9.34:8060/SDRCRM/SignOn.asp",
        "downloads": [
            {
                "title": "YUCHAI YC6J190-20 Engine Catalogue",
                "description": "This is Shindary's new catalogue of YUCHAI YC6J190-20 Engine. If you want more this part information, welcome to download following sheet.",
                "file_url": "/migrated/customer-center/yuchai-yc6j190-20-engine-catalogue.pdf",
                "thumbnail": "/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "CYQD32T Engine catalogue",
                "description": "This is Shindary's new catalogue of CYQD32T Engine. If you want more this part information, welcome to download following sheet.",
                "file_url": "/migrated/customer-center/cyqd32t-engine-catalogue.pdf",
                "thumbnail": "/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "Lighting catalogue",
                "description": "This is Shindary's new catalogue of Lighting. If you want more this part information, welcome to download following sheet.",
                "file_url": "/migrated/customer-center/lighting-catalogue.pdf",
                "thumbnail": "/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "Filter catalogue",
                "description": "This is Shindary's new catalogue of filter. If you want more this part information, welcome to download following sheet.",
                "file_url": "/migrated/customer-center/filter-catalogue.pdf",
                "thumbnail": "/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "ENGINE HEAD catalogue",
                "description": "This is Shindary's new catalogue of ENGINE HEAD. If you want more this part information, welcome to download following sheet.",
                "file_url": "/migrated/customer-center/engine-head-catalogue.pdf",
                "thumbnail": "/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            }
        ]
    }
}


def get_customer_center_payload(site_code: str):
    payload = CUSTOMER_CENTER_BY_SITE.get(site_code)
    if payload is None:
        return None
    return deepcopy(payload)
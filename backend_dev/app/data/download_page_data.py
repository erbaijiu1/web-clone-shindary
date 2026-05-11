from copy import deepcopy


DOWNLOAD_PAGE_BY_SITE = {
    "shindary": {
        "seo": {
            "title": "CHERY Tension Pulley, BYD Engine Hood & Clutch Release Bearing, Wholesale",
            "keywords": ":Jinbei Fuel Filter Assy, ZOTYE Left Headlamp, Dongfeng Outer Handle",
            "description": "We are Professional and Leading supplier for OEM parts and high quality replacement parts of Chinese brand cars and foreign brand cars, such as: Chery, Chevrolet, Changan, etc.",
            "og_title": "CHERY Tension Pulley, BYD Engine Hood & Clutch Release Bearing, Wholesale",
            "og_description": "We are Professional and Leading supplier for OEM parts and high quality replacement parts of Chinese brand cars and foreign brand cars, such as: Chery, Chevrolet, Changan, etc.",
            "og_image": "https://www.shindary.com/logo.png",
            "og_url": "https://www.shindary.com/download/",
            "og_site_name": "Shindary Automotive Parts Co., Ltd."
        },
        "page_title": "Download",
        "parent_label": "Customer Center",
        "parent_href": "/customer-center",
        "downloads": [
            {
                "title": "YUCHAI YC6J190-20 Engine Catalogue",
                "description": "This is Shindary's new catalogue of YUCHAI YC6J190-20 Engine. If you want more this part information, welcome to download following sheet.",
                "file_url": "/shindary_static/migrated/customer-center/yuchai-yc6j190-20-engine-catalogue.pdf",
                "thumbnail": "/shindary_static/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "CYQD32T Engine catalogue",
                "description": "This is Shindary's new catalogue of CYQD32T Engine. If you want more this part information, welcome to download following sheet.",
                "file_url": "/shindary_static/migrated/customer-center/cyqd32t-engine-catalogue.pdf",
                "thumbnail": "/shindary_static/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "Lighting catalogue",
                "description": "This is Shindary's new catalogue of Lighting. If you want more this part information, welcome to download following sheet.",
                "file_url": "/shindary_static/migrated/customer-center/lighting-catalogue.pdf",
                "thumbnail": "/shindary_static/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "Filter catalogue",
                "description": "This is Shindary's new catalogue of filter. If you want more this part information, welcome to download following sheet.",
                "file_url": "/shindary_static/migrated/customer-center/filter-catalogue.pdf",
                "thumbnail": "/shindary_static/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            },
            {
                "title": "ENGINE HEAD catalogue",
                "description": "This is Shindary's new catalogue of ENGINE HEAD. If you want more this part information, welcome to download following sheet.",
                "file_url": "/shindary_static/migrated/customer-center/engine-head-catalogue.pdf",
                "thumbnail": "/shindary_static/migrated/customer-center/pdf.jpg",
                "button_label": "DOWNLOAD"
            }
        ]
    }
}


def get_download_page_payload(site_code: str):
    payload = DOWNLOAD_PAGE_BY_SITE.get(site_code)
    if payload is None:
        return None
    return deepcopy(payload)
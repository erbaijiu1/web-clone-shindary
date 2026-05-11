from copy import deepcopy


CONTACT_PAGE_BY_SITE = {
    "shindary": {
        "seo": {
            "title": "Dongfeng Front Grille & Outer Handle, FAW Front Brake Pad Kit ＆ Rr Break Pad Kit，Price",
            "keywords": "Dongfeng Left Headlamp, Jinbei  Clutch Release, Great Wall Right Tail Lamp",
            "description": "We are an expert in auto parts, whether you'd like to get more info on what, why and how we do what we do, need help with what you're creating,would like to partner up or just say hi!",
            "og_title": "Dongfeng Front Grille & Outer Handle, FAW Front Brake Pad Kit ＆ Rr Break Pad Kit，Price",
            "og_description": "We are an expert in auto parts, whether you'd like to get more info on what, why and how we do what we do, need help with what you're creating,would like to partner up or just say hi!",
            "og_image": "https://www.shindary.com/logo.png",
            "og_url": "https://www.shindary.com/contact/",
            "og_site_name": "Shindary Automotive Parts Co., Ltd."
        },
        "page_title": "Contact Us",
        "company_name": "Shindary Automotive Parts Co., Ltd.",
        "address": "Rm.11-12, 4th Tower, Daya Jinkai Int'l Plaza, No.1230, Jinkai Ave., New North Zone, Chongqing, China.",
        "fax": "+86 23 6320 5611",
        "phone": "+86 23 6305 1623",
        "email": "overseas@shindary.com",
        "customer_links": [
            {
                "label": "Whatsapp (Sales 1)",
                "value": "8615823303378",
                "href": "https://api.whatsapp.com/send?phone=8615823303378"
            },
            {
                "label": "Whatsapp (Sales 2)",
                "value": "8613667664312",
                "href": "https://api.whatsapp.com/send?phone=8613667664312"
            },
            {
                "label": "Whatsapp (Sales 3)",
                "value": "8615290810617",
                "href": "https://api.whatsapp.com/send?phone=8615290810617"
            }
        ],
        "supplier_contacts": [
            {
                "title": "Passenger car product manager",
                "name": "Jane",
                "phone": "+86 186 2334 5883"
            },
            {
                "title": "Commercial vehicle product manager",
                "name": "Jerry",
                "phone": "+86 152 1321 2350"
            }
        ],
        "map_image": "/shindary_static/migrated/contact/xinderuiaa.jpg",
        "feedback_title": "feedback",
        "feedback_notice": "This migrated page preserves the original feedback form layout. Submission wiring can be connected to a dedicated backend workflow later."
    }
}


def get_contact_page_payload(site_code: str):
    payload = CONTACT_PAGE_BY_SITE.get(site_code)
    if payload is None:
        return None
    return deepcopy(payload)
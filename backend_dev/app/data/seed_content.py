from datetime import datetime

from .. import models


HOMEPAGE_CATEGORY_ORDER = [
    ("Selected Parts", "selected-parts"),
    ("Hot Models", "hot-models"),
    ("Commercial", "commercial"),
    ("Hot Selling", "hot-selling")
]


PRODUCT_SEEDS = [
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Brake Disc 51712-C1000 for HYUNDAI", "slug": "brake-disc-51712-c1000-for-hyundai", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-1.webp"},
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Radiator S111301110CA for CHERY", "slug": "radiator-s111301110ca-for-chery", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-2.webp"},
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Ball Joint R 2904100XPW01A for GREAT WALL POER", "slug": "ball-joint-r-2904100xpw01a-for-great-wall-poer", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-3.webp"},
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Front Stabilizer Shaft Link Assy L 7701023433068 for FOTON TUNLAND", "slug": "front-stabilizer-shaft-link-assy-l-7701023433068-for-foton-tunland", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-4.webp"},
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Clutch Press Plate 1601002XPW01A-01 for GREAT WALL POER", "slug": "clutch-press-plate-1601002xpw01a-01-for-great-wall-poer", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-5.webp"},
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Front Shock Absorber L 546501R071 for HYUNDAI ACCENT", "slug": "front-shock-absorber-l-546501r071-for-hyundai-accent", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-6.webp"},
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Control Arm UC2R34250D for MAZDA BT-50", "slug": "control-arm-uc2r34250d-for-mazda-bt-50", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-7.webp"},
    {"category_slug": "selected-parts", "category_name": "Selected Parts", "name": "Brake Drum 58411-1C010 for HYUNDAI", "slug": "brake-drum-58411-1c010-for-hyundai", "description": "Featured selected part from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/selected-8.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Automotive parts for DONGFENG SX6", "slug": "automotive-parts-for-dongfeng-sx6-1", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-1.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Spare parts for GREATWALL HAVAL JOLION", "slug": "spare-parts-for-greatwall-haval-jolion", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-2.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Spare parts for GREATWALL F7", "slug": "spare-parts-for-greatwall-f7", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-3.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Spare parts for Geely Coolray", "slug": "spare-parts-for-geely-coolray", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-4.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Spare parts for BYD NEW E2", "slug": "spare-parts-for-byd-new-e2", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-5.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Spare parts for BYD ATTO3", "slug": "spare-parts-for-byd-atto3", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-6.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Auto spare parts for NEW SAIL", "slug": "auto-spare-parts-for-new-sail", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-7.webp"},
    {"category_slug": "hot-models", "category_name": "Hot Models", "name": "Spare parts for CHEVROLET CAPTIVA", "slug": "spare-parts-for-chevrolet-captiva", "description": "Hot model collection from the Shindary homepage.", "image_url": "/shindary_static/migrated/home/hot-model-8.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for MAXUS T60", "slug": "spare-parts-for-maxus-t60", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-1.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for FOTON TUNLAND", "slug": "spare-parts-for-foton-tunland", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-2.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for Great Wall POER", "slug": "spare-parts-for-great-wall-poer", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-3.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for Great Wall Wingle 5", "slug": "spare-parts-for-great-wall-wingle-5", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-4.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for CHANGAN HUNTER", "slug": "spare-parts-for-changan-hunter", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-5.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for GreatWall Wingle 7", "slug": "spare-parts-for-greatwall-wingle-7", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-6.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for JAC T8", "slug": "spare-parts-for-jac-t8", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-7.webp"},
    {"category_slug": "commercial", "category_name": "Commercial", "name": "Spare parts for ISUZU D-MAX", "slug": "spare-parts-for-isuzu-d-max", "description": "Commercial vehicle selection from the homepage.", "image_url": "/shindary_static/migrated/home/commercial-8.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Starter 36100-11140 for HYUNDAI", "slug": "starter-36100-11140-for-hyundai", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-1.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Generator 31400-85Z00 for CHEVROLET", "slug": "generator-31400-85z00-for-chevrolet", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-2.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Starter 3610023160 for HYUNDAI TUCSON", "slug": "starter-3610023160-for-hyundai-tucson", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-3.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Air filter PE07133A0A for MAZDA", "slug": "air-filter-pe07133a0a-for-mazda", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-4.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Compressor 977012S601 for KIA", "slug": "compressor-977012s601-for-kia", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-5.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Starting machine 8941566711 for CHEVROLET", "slug": "starting-machine-8941566711-for-chevrolet", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-6.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Generator OK30D18300 for KIA", "slug": "generator-ok30d18300-for-kia", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-7.webp"},
    {"category_slug": "hot-selling", "category_name": "Hot Selling", "name": "Front control arm ball joint pin assy A21-2909060BB for CHERY", "slug": "front-control-arm-ball-joint-pin-assy-a21-2909060bb-for-chery", "description": "Hot-selling product from the homepage.", "image_url": "/shindary_static/migrated/home/hot-selling-8.webp"}
]


ARTICLE_SEEDS = [
    {
        "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR STEERING SYSTEM",
        "slug": "shindary-productsspare-parts-numbers-for-steering-system-51",
        "excerpt": "Following sheet is part codes catalogue for steering system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
        "content": "<p><img src='/shindary_static/migrated/home/news-1.webp' alt='Steering system catalogue' /></p><p>Following sheet is part codes catalogue for the steering system. The selection is versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda platforms.</p><p>For more information, contact your sales engineer or send an email to overseas@shindary.com. Shindary serves for your value.</p>",
        "image_url": "/shindary_static/migrated/home/news-1.webp",
        "published_at": datetime(2026, 4, 30, 9, 0, 0),
        "is_featured": True,
        "sort_order": 1
    },
    {
        "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR BRAKING SYSTEM",
        "slug": "shindary-productsspare-parts-numbers-for-braking-system-51",
        "excerpt": "Following sheet is part codes catalogue for braking system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
        "content": "<p><img src='/shindary_static/migrated/home/news-2.webp' alt='Braking system catalogue' /></p><p>Following sheet is part codes catalogue for the braking system. The catalogue covers versatile applications across Chinese brand vehicles and export market demand.</p><p>Reach out to overseas@shindary.com for the full catalogue sheet and quotation support.</p>",
        "image_url": "/shindary_static/migrated/home/news-2.webp",
        "published_at": datetime(2026, 4, 30, 9, 5, 0),
        "is_featured": True,
        "sort_order": 2
    },
    {
        "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR TIMING SYSTEM",
        "slug": "shindary-productsspare-parts-numbers-for-timing-system-51",
        "excerpt": "Following sheet is part codes catalogue for timing system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
        "content": "<p><img src='/shindary_static/migrated/home/news-3.webp' alt='Timing system catalogue' /></p><p>Following sheet is part codes catalogue for the timing system. It is designed for fast reference during cross-model quoting and export preparation.</p><p>Contact Shindary for the full part-code list and packaging support.</p>",
        "image_url": "/shindary_static/migrated/home/news-3.webp",
        "published_at": datetime(2026, 4, 30, 9, 10, 0),
        "is_featured": True,
        "sort_order": 3
    },
    {
        "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR SUSPENSION SYSTEM",
        "slug": "shindary-productsspare-parts-numbers-for-suspension-system-51",
        "excerpt": "Following sheet is part codes catalogue for suspension system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
        "content": "<p><img src='/shindary_static/migrated/news/news-4.jpg' alt='Suspension system catalogue' /></p><p>This catalogue focuses on suspension-system references used across major Chinese brand vehicle families and export programs.</p><p>Ask Shindary for part-code support, availability and container-based shipment planning.</p>",
        "image_url": "/shindary_static/migrated/news/news-4.jpg",
        "published_at": datetime(2026, 4, 30, 9, 15, 0),
        "is_featured": False,
        "sort_order": 4
    },
    {
        "title": "SHINDARY PRODUCTS SPARE PARTS NUMBERS FOR CRANKSHAFT CONNECTING ROD SYSTEM",
        "slug": "shindary-productsspare-parts-numbers-for-crankshaft-connecting-rod-system-51",
        "excerpt": "Following sheet is part codes catalogue for crankshaft connecting rod system. This product is very versatile and applies to Zotye, JMC, DFM, Geely, Changhe, BAIC, BYD, FAW, FOTON, JAC, DFSK and Mazda.",
        "content": "<p><img src='/shindary_static/migrated/news/news-5.jpg' alt='Crankshaft connecting rod catalogue' /></p><p>This reference sheet covers crankshaft and connecting-rod system parts used in versatile export demand scenarios.</p><p>Contact the export team for matching support, quotations and packaging specifications.</p>",
        "image_url": "/shindary_static/migrated/news/news-5.jpg",
        "published_at": datetime(2026, 4, 30, 9, 20, 0),
        "is_featured": False,
        "sort_order": 5
    }
]


def seed_shindary_content(db):
    site = db.query(models.Site).filter(models.Site.site_code == "shindary").first()
    changed = False

    if site is None:
        site = models.Site(site_code="shindary", domain="www.shindary.com", name="Shindary Auto Parts")
        db.add(site)
        db.flush()
        changed = True

    category_by_slug = {
        category.slug: category
        for category in db.query(models.Category).filter(models.Category.site_id == site.id).all()
    }

    for _, category_slug in HOMEPAGE_CATEGORY_ORDER:
        if category_slug not in category_by_slug:
            name = next(label for label, slug in HOMEPAGE_CATEGORY_ORDER if slug == category_slug)
            category = models.Category(site_id=site.id, name=name, slug=category_slug)
            db.add(category)
            db.flush()
            category_by_slug[category_slug] = category
            changed = True

    for item in PRODUCT_SEEDS:
        category = category_by_slug[item["category_slug"]]
        product = (
            db.query(models.Product)
            .filter(models.Product.site_id == site.id, models.Product.slug == item["slug"])
            .first()
        )
        if product is None:
            product = models.Product(
                site_id=site.id,
                category_id=category.id,
                name=item["name"],
                slug=item["slug"],
                description=item["description"],
                image_url=item["image_url"]
            )
            db.add(product)
            changed = True
            continue

        if not product.category_id:
            product.category_id = category.id
            changed = True
        if not product.description:
            product.description = item["description"]
            changed = True
        if not product.image_url:
            product.image_url = item["image_url"]
            changed = True

    for item in ARTICLE_SEEDS:
        article = (
            db.query(models.Article)
            .filter(models.Article.site_id == site.id, models.Article.slug == item["slug"])
            .first()
        )
        if article is None:
            article = models.Article(site_id=site.id, **item)
            db.add(article)
            changed = True

    if changed:
        db.commit()
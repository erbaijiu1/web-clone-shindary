from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ....database import get_db
from .... import models, schemas
from ....data.about_page_data import get_about_page_payload
from ....data.about_subpage_data import get_about_subpage_payload
from ....data.contact_page_data import get_contact_page_payload
from ....data.customer_center_data import get_customer_center_payload
from ....data.download_page_data import get_download_page_payload
from ....data.homepage_data import get_homepage_payload
from ....data.seed_content import HOMEPAGE_CATEGORY_ORDER

router = APIRouter()


def get_site_or_404(site_code: str, db: Session):
    site = db.query(models.Site).filter(models.Site.site_code == site_code).first()
    if not site:
        raise HTTPException(status_code=404, detail="Site not found")
    return site


def serialize_home_product(product: models.Product):
    return {
        "title": product.name,
        "href": f"/products/{product.slug}",
        "image": product.image_url or "/migrated/home/selected-1.webp"
    }


def build_home_product_tabs(site_id: int, db: Session):
    tabs = []
    for label, category_slug in HOMEPAGE_CATEGORY_ORDER:
        products = (
            db.query(models.Product)
            .join(models.Category, models.Product.category_id == models.Category.id)
            .filter(models.Product.site_id == site_id, models.Category.slug == category_slug)
            .order_by(models.Product.id.desc())
            .limit(8)
            .all()
        )
        tabs.append({
            "label": label,
            "items": [serialize_home_product(product) for product in products]
        })
    return tabs


def build_home_news(site_id: int, db: Session):
    articles = (
        db.query(models.Article)
        .filter(models.Article.site_id == site_id)
        .order_by(models.Article.is_featured.desc(), models.Article.sort_order.asc(), models.Article.published_at.desc())
        .limit(3)
        .all()
    )
    return {
        "title": "Latest News",
        "href": "/news",
        "items": [
            {
                "title": article.title,
                "href": f"/news/{article.slug}",
                "excerpt": article.excerpt,
                "image": article.image_url or "/migrated/home/news-1.webp"
            }
            for article in articles
        ]
    }


@router.get("/home", response_model=schemas.HomepageResponse)
def get_home(site_code: str, db: Session = Depends(get_db)):
    site = get_site_or_404(site_code, db)
    homepage = get_homepage_payload(site_code)
    if homepage is None:
        raise HTTPException(status_code=404, detail="Site homepage not found")
    homepage["product_tabs"] = build_home_product_tabs(site.id, db)
    homepage["news"] = build_home_news(site.id, db)
    return homepage


@router.get("/about", response_model=schemas.AboutPageResponse)
def get_about_page(site_code: str):
    about_page = get_about_page_payload(site_code)
    if about_page is None:
        raise HTTPException(status_code=404, detail="About page not found")
    return about_page


@router.get("/customer-center", response_model=schemas.CustomerCenterPageResponse)
def get_customer_center_page(site_code: str):
    customer_center_page = get_customer_center_payload(site_code)
    if customer_center_page is None:
        raise HTTPException(status_code=404, detail="Customer center page not found")
    return customer_center_page


@router.get("/contact", response_model=schemas.ContactPageResponse)
def get_contact_page(site_code: str):
    contact_page = get_contact_page_payload(site_code)
    if contact_page is None:
        raise HTTPException(status_code=404, detail="Contact page not found")
    return contact_page


@router.get("/download", response_model=schemas.DownloadPageResponse)
def get_download_page(site_code: str):
    download_page = get_download_page_payload(site_code)
    if download_page is None:
        raise HTTPException(status_code=404, detail="Download page not found")
    return download_page


@router.get("/about-subpages/{page_slug}", response_model=schemas.AboutSubpageResponse)
def get_about_subpage(site_code: str, page_slug: str):
    about_subpage = get_about_subpage_payload(site_code, page_slug)
    if about_subpage is None:
        raise HTTPException(status_code=404, detail="About subpage not found")
    return about_subpage

@router.get("/categories", response_model=List[schemas.CategoryResponse])
def get_categories(site_code: str, db: Session = Depends(get_db)):
    site = get_site_or_404(site_code, db)
    
    categories = db.query(models.Category).filter(models.Category.site_id == site.id).all()
    return categories

@router.get("/products", response_model=List[schemas.ProductResponse])
def get_products(site_code: str, category_id: int = None, db: Session = Depends(get_db)):
    site = get_site_or_404(site_code, db)
        
    query = db.query(models.Product).filter(models.Product.site_id == site.id)
    if category_id:
        query = query.filter(models.Product.category_id == category_id)
        
    return query.order_by(models.Product.id.desc()).limit(50).all()


@router.get("/products/{slug}", response_model=schemas.ProductResponse)
def get_product(site_code: str, slug: str, db: Session = Depends(get_db)):
    site = get_site_or_404(site_code, db)
    product = (
        db.query(models.Product)
        .filter(models.Product.site_id == site.id, models.Product.slug == slug)
        .first()
    )
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.get("/news", response_model=schemas.ArticleListResponse)
def get_articles(site_code: str, page: int = 1, page_size: int = 6, db: Session = Depends(get_db)):
    site = get_site_or_404(site_code, db)
    query = (
        db.query(models.Article)
        .filter(models.Article.site_id == site.id)
        .order_by(models.Article.published_at.desc(), models.Article.id.desc())
    )
    total = query.count()
    items = query.offset((page - 1) * page_size).limit(page_size).all()
    return {
        "items": items,
        "total": total,
        "page": page,
        "page_size": page_size
    }


@router.get("/news/{slug}", response_model=schemas.ArticleResponse)
def get_article(site_code: str, slug: str, db: Session = Depends(get_db)):
    site = get_site_or_404(site_code, db)
    article = (
        db.query(models.Article)
        .filter(models.Article.site_id == site.id, models.Article.slug == slug)
        .first()
    )
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

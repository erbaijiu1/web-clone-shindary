from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ....database import get_db
from .... import models, schemas

router = APIRouter()

# Note: In a production app, add JWT authentication here (Depends(get_current_user))
# For now, it's open for initial integration.


@router.get("/sites", response_model=List[schemas.SiteResponse])
def get_sites(db: Session = Depends(get_db)):
    return db.query(models.Site).order_by(models.Site.id.asc()).all()


@router.get("/categories", response_model=List[schemas.CategoryResponse])
def get_all_categories(site_id: int = None, db: Session = Depends(get_db)):
    query = db.query(models.Category)
    if site_id is not None:
        query = query.filter(models.Category.site_id == site_id)
    return query.order_by(models.Category.name.asc()).all()

@router.get("/products", response_model=List[schemas.ProductResponse])
def get_all_products(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    products = db.query(models.Product).offset(skip).limit(limit).all()
    return products

@router.post("/products", response_model=schemas.ProductResponse, status_code=status.HTTP_201_CREATED)
def create_product(product: schemas.ProductBase, site_id: int, category_id: int, db: Session = Depends(get_db)):
    db_product = models.Product(**product.model_dump(), site_id=site_id, category_id=category_id)
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

@router.put("/products/{product_id}", response_model=schemas.ProductResponse)
def update_product(product_id: int, product: schemas.ProductBase, db: Session = Depends(get_db)):
    db_product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
        
    for var, value in product.model_dump().items():
        if value is not None:
            setattr(db_product, var, value)
        
    db.commit()
    db.refresh(db_product)
    return db_product

@router.delete("/products/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_product(product_id: int, db: Session = Depends(get_db)):
    db_product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
        
    db.delete(db_product)
    db.commit()
    return


@router.get("/articles", response_model=List[schemas.ArticleResponse])
def get_all_articles(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return (
        db.query(models.Article)
        .order_by(models.Article.published_at.desc(), models.Article.id.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )


@router.post("/articles", response_model=schemas.ArticleResponse, status_code=status.HTTP_201_CREATED)
def create_article(article: schemas.ArticleBase, site_id: int, db: Session = Depends(get_db)):
    db_article = models.Article(site_id=site_id, **article.model_dump())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article


@router.put("/articles/{article_id}", response_model=schemas.ArticleResponse)
def update_article(article_id: int, article: schemas.ArticleBase, db: Session = Depends(get_db)):
    db_article = db.query(models.Article).filter(models.Article.id == article_id).first()
    if not db_article:
        raise HTTPException(status_code=404, detail="Article not found")

    for var, value in article.model_dump().items():
        if value is not None:
            setattr(db_article, var, value)

    db.commit()
    db.refresh(db_article)
    return db_article


@router.delete("/articles/{article_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_article(article_id: int, db: Session = Depends(get_db)):
    db_article = db.query(models.Article).filter(models.Article.id == article_id).first()
    if not db_article:
        raise HTTPException(status_code=404, detail="Article not found")

    db.delete(db_article)
    db.commit()
    return

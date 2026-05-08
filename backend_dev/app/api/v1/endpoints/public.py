from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ....database import get_db
from .... import models, schemas

router = APIRouter()

@router.get("/categories", response_model=List[schemas.CategoryResponse])
def get_categories(site_code: str, db: Session = Depends(get_db)):
    site = db.query(models.Site).filter(models.Site.site_code == site_code).first()
    if not site:
        raise HTTPException(status_code=404, detail="Site not found")
    
    categories = db.query(models.Category).filter(models.Category.site_id == site.id).all()
    return categories

@router.get("/products", response_model=List[schemas.ProductResponse])
def get_products(site_code: str, category_id: int = None, db: Session = Depends(get_db)):
    site = db.query(models.Site).filter(models.Site.site_code == site_code).first()
    if not site:
        raise HTTPException(status_code=404, detail="Site not found")
        
    query = db.query(models.Product).filter(models.Product.site_id == site.id)
    if category_id:
        query = query.filter(models.Product.category_id == category_id)
        
    return query.limit(50).all()

from pydantic import BaseModel
from typing import List, Optional

class ProductBase(BaseModel):
    name: str
    name_en: Optional[str] = None
    name_es: Optional[str] = None
    slug: str
    description: Optional[str] = None
    part_number: Optional[str] = None
    oem_number: Optional[str] = None
    car_model: Optional[str] = None

class ProductResponse(ProductBase):
    id: int
    site_id: int
    category_id: int

    class Config:
        from_attributes = True

class CategoryBase(BaseModel):
    name: str
    name_en: Optional[str] = None
    name_es: Optional[str] = None
    slug: str
    image_url: Optional[str] = None
    description: Optional[str] = None

class CategoryResponse(CategoryBase):
    id: int
    site_id: int
    parent_id: Optional[int] = None

    class Config:
        from_attributes = True

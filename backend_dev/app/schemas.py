from datetime import datetime

from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    name: str
    name_en: Optional[str] = None
    name_es: Optional[str] = None
    slug: str
    description: Optional[str] = None
    part_number: Optional[str] = None
    oem_number: Optional[str] = None
    car_model: Optional[str] = None
    image_url: Optional[str] = None

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


class SiteResponse(BaseModel):
    id: int
    site_code: str
    domain: str
    name: str

    class Config:
        from_attributes = True


class LinkItem(BaseModel):
    label: str
    href: str
    external: bool = False
    active: bool = False


class NavItem(LinkItem):
    children: list[LinkItem] = []


class SeoResponse(BaseModel):
    title: str
    keywords: str
    description: str
    og_title: str
    og_description: str
    og_image: str
    og_url: str
    og_site_name: str


class HeroSlideResponse(BaseModel):
    title: str
    href: str
    image: str
    mobile_image: str
    alt: str


class ProfileFeatureResponse(BaseModel):
    title: str
    description: str
    href: str
    icon: str
    hover_icon: str


class ProfileSectionResponse(BaseModel):
    title: str
    href: str
    summary: str
    features: list[ProfileFeatureResponse]


class ImageCardResponse(BaseModel):
    title: str
    href: str
    image: str


class BrandSectionResponse(BaseModel):
    title: str
    href: str
    items: list[ImageCardResponse]


class ProductTabResponse(BaseModel):
    label: str
    items: list[ImageCardResponse]


class NewsItemResponse(BaseModel):
    title: str
    href: str
    excerpt: str
    image: str


class NewsSectionResponse(BaseModel):
    title: str
    href: str
    items: list[NewsItemResponse]


class ContactResponse(BaseModel):
    company: str
    address: str
    phone: str
    fax: str
    email: str
    whatsapp: list[str]


class FooterGroupResponse(BaseModel):
    title: str
    links: list[LinkItem]


class FloatingActionResponse(BaseModel):
    label: str
    href: str
    description: str
    external: bool = False


class HomepageResponse(BaseModel):
    site_name: str
    seo: SeoResponse
    primary_nav: list[NavItem]
    language_links: list[LinkItem]
    hero_slides: list[HeroSlideResponse]
    profile: ProfileSectionResponse
    brands: BrandSectionResponse
    product_tabs: list[ProductTabResponse]
    news: NewsSectionResponse
    contact: ContactResponse
    footer_groups: list[FooterGroupResponse]
    social_links: list[LinkItem]
    floating_actions: list[FloatingActionResponse]


class AboutSectionResponse(BaseModel):
    title: str
    body: list[str]
    image: Optional[str] = None
    image_alt: Optional[str] = None


class AboutPageResponse(BaseModel):
    seo: SeoResponse
    page_title: str
    sidebar_links: list[LinkItem]
    intro: list[str]
    brand_lines: list[str]
    sections: list[AboutSectionResponse]


class DownloadItemResponse(BaseModel):
    title: str
    description: str
    file_url: str
    thumbnail: str
    button_label: str = "DOWNLOAD"


class CustomerCenterPageResponse(BaseModel):
    seo: SeoResponse
    page_title: str
    cs_system_url: str
    downloads: list[DownloadItemResponse]


class DownloadPageResponse(BaseModel):
    seo: SeoResponse
    page_title: str
    parent_label: str
    parent_href: str
    downloads: list[DownloadItemResponse]


class ContactLinkResponse(BaseModel):
    label: str
    value: str
    href: str


class SupplierContactResponse(BaseModel):
    title: str
    name: str
    phone: str


class ContactPageResponse(BaseModel):
    seo: SeoResponse
    page_title: str
    company_name: str
    address: str
    fax: str
    phone: str
    email: str
    customer_links: list[ContactLinkResponse]
    supplier_contacts: list[SupplierContactResponse]
    map_image: str
    feedback_title: str
    feedback_notice: str


class AboutGalleryImageResponse(BaseModel):
    image: str
    alt: str
    caption: str


class AboutGallerySectionResponse(BaseModel):
    title: str
    images: list[AboutGalleryImageResponse]


class AboutVideoItemResponse(BaseModel):
    title: str
    embed_url: str
    description: Optional[str] = None
    external_url: Optional[str] = None


class AboutSubpageResponse(BaseModel):
    seo: SeoResponse
    page_title: str
    content_title: str
    content_html: Optional[str] = None
    gallery_sections: list[AboutGallerySectionResponse] = []
    video_items: list[AboutVideoItemResponse] = []
    sidebar_links: list[LinkItem]


class ArticleBase(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    image_url: Optional[str] = None
    published_at: Optional[datetime] = None
    is_featured: bool = False
    sort_order: int = 0


class ArticleSummaryResponse(BaseModel):
    id: int
    site_id: int
    title: str
    slug: str
    excerpt: str
    image_url: Optional[str] = None
    published_at: datetime
    is_featured: bool
    sort_order: int

    class Config:
        from_attributes = True


class ArticleResponse(ArticleSummaryResponse):
    content: str


class ArticleListResponse(BaseModel):
    items: list[ArticleSummaryResponse]
    total: int
    page: int
    page_size: int

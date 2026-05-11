from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.v1.endpoints import public, admin
from .database import SessionLocal, engine
from . import models
from .data.seed_content import seed_shindary_content

# Create tables if they don't exist
models.Base.metadata.create_all(bind=engine)

with SessionLocal() as db:
    seed_shindary_content(db)

app = FastAPI(title="Auto Parts Multi-Site API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(public.router, prefix="/{site_code}/api/v1/public", tags=["public"])
app.include_router(admin.router, prefix="/{site_code}/api/v1/admin", tags=["admin"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Auto Parts Multi-Site API"}

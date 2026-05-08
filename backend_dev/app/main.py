from fastapi import FastAPI
from .api.v1.endpoints import public, admin
from .database import engine
from . import models

# Create tables if they don't exist
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Auto Parts Multi-Site API")

app.include_router(public.router, prefix="/{site_code}/api/v1/public", tags=["public"])
app.include_router(admin.router, prefix="/api/v1/admin", tags=["admin"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Auto Parts Multi-Site API"}

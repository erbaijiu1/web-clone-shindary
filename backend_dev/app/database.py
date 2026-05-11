import os
import urllib.parse
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

raw_password = os.environ.get("DB_PASSWORD", "Gmcc@123")
password = urllib.parse.quote_plus(raw_password)
db_host = os.environ.get("DB_HOST", "127.0.0.1")
db_user = os.environ.get("DB_USER", "root")
db_name = os.environ.get("DB_NAME", "shindary_db")
db_port = os.environ.get("DB_PORT", "3306")

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{db_user}:{password}@{db_host}:{db_port}/{db_name}"

engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

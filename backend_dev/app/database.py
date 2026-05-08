import urllib.parse
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

password = urllib.parse.quote_plus("Gmcc@123")
SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://root:{password}@127.0.0.1:3306/shindary_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

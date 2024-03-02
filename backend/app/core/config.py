import secrets
from typing import Any, Dict, List, Optional, Union

from pydantic import AnyHttpUrl, HttpUrl, PostgresDsn


ALGORITHM: str = "HS256"
SECRET_KEY: str = secrets.token_urlsafe(32)
REFRESH_SECRET_KEY: str = secrets.token_urlsafe(31)
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # 30 minutes
REFRESH_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days
# SERVER_NAME: str
# SERVER_HOST: AnyHttpUrl
# BACKEND_CORS_ORIGINS is a JSON-formatted list of origins
# e.g: '["http://localhost", "http://localhost:4200", "http://localhost:3000", \
# "http://localhost:8080", "http://local.dockertoolbox.tiangolo.com"]'
# BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = []

# PROJECT_NAME: str
# SENTRY_DSN: Optional[HttpUrl] = None

POSTGRES_HOST: str = "db"
POSTGRES_PORT: str = "5432"
POSTGRES_USER: str = "postgres"
POSTGRES_PASSWORD: str = "postgres123"
POSTGRES_DB: str = "postgresmacs"

SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg2://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"
# SQLALCHEMY_DATABASE_URL="postgresql://postgres:postgres123@db:5432/postgresmacs"
# SQLALCHEMY_DATABASE_URL_Local ="postgresql://postgres:postgres123@localhost:5432/postgresmacs"

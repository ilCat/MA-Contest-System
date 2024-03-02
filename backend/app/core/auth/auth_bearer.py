from jwt import JWT
from jwt.exceptions import JWSDecodeError
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from models.models import Token
from ..config import (
    ACCESS_TOKEN_EXPIRE_MINUTES,
    REFRESH_SECRET_KEY,
    REFRESH_TOKEN_EXPIRE_MINUTES,
    ALGORITHM,
    SECRET_KEY,
)


def decodeJWT(jwtoken: str):
    try:
        payload = JWT.decode(jwtoken, SECRET_KEY, ALGORITHM)
        return payload
    except JWSDecodeError:
        return None


class JWTBearer(HTTPBearer):
    def __init__(self, auto_error: bool = True):
        super(JWTBearer, self).__init__(auto_error=auto_error)

    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super(
            JWTBearer, self
        ).__call__(request)
        if credentials:
            if not credentials.scheme == "Bearer":
                raise HTTPException(
                    status_code=403, detail="Invalid authentication scheme."
                )
            if not self.verify_jwt(credentials.credentials):
                raise HTTPException(
                    status_code=403, detail="Invalid token or expired token."
                )
            return credentials.credentials
        else:
            raise HTTPException(status_code=403, detail="Invalid authorization code.")

    def verify_jwt(self, jwtoken: str) -> bool:
        isTokenValid: bool = False

        try:
            payload = decodeJWT(jwtoken)
        except:
            payload = None
        if payload:
            isTokenValid = True
        return isTokenValid


def token_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        payload = JWT.decode(kwargs["dependencies"], SECRET_KEY, ALGORITHM)
        user_id = payload["sub"]
        data = (
            kwargs["session"]
            .query(Token)
            .filter_by(user_id=user_id, access_toke=kwargs["dependencies"], status=True)
            .first()
        )
        if data:
            return func(kwargs["dependencies"], kwargs["session"])

        else:
            return {"msg": "Token blocked"}

    return wrapper


jwt_bearer = JWTBearer()

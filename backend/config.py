from os import environ, path
from dotenv import load_dotenv
import datetime

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, ".env"))


class Config:
    SECRET_KEY = environ.get("SECRET_KEY")
    MONGODB_SETTINGS = {
        "username": environ.get("MONGODB_SETTINGS_USERNAME"),
        "password": environ.get("MONGODB_SETTINGS_PASSWORD"),
        "host": environ.get("MONGODB_SETTINGS_HOST"),
    }
    JWT_SECRET_KEY = environ.get("JWT_SECRET_KEY")
    JWT_ACCESS_TOKEN_EXPIRES = datetime.timedelta(minutes=15)

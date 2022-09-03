from flask import Flask
from flask_mongoengine import MongoEngine
from flask_bcrypt import Bcrypt

from config import Config

announcements_app = Flask(__name__)
announcements_app.config.from_object(Config)
db = MongoEngine(announcements_app)
bcrypt = Bcrypt(announcements_app)

from app.user.routes import user_blueprint

announcements_app.register_blueprint(user_blueprint, url_prefix="/user")

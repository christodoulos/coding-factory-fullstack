from flask import Flask
from flask_mongoengine import MongoEngine
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from config import Config

announcements_app = Flask(__name__)
announcements_app.config.from_object(Config)
cors = CORS(announcements_app, resources={r"*": {"origins": "http://localhost:4200"}})
jwt = JWTManager(announcements_app)
db = MongoEngine(announcements_app)
bcrypt = Bcrypt(announcements_app)

from app.user.routes import user_blueprint
from app.user_category.routes import user_category_blueprint

announcements_app.register_blueprint(user_blueprint, url_prefix="/user")
announcements_app.register_blueprint(
    user_category_blueprint, url_prefix="/user/category"
)

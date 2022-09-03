from flask import Blueprint, jsonify
import mongoengine as me
from .model import User
from app import db

user_blueprint = Blueprint("user", __name__)

@user_blueprint.route("api/<username>")
def get_one_user(username: str):
    return jsonify({"username": username}), 200

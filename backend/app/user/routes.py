from flask import Blueprint, jsonify, request
from .model import User
from app import db

user_blueprint = Blueprint("user", __name__)


@user_blueprint.route("api/<username>")
def get_one_user(username: str):
    return jsonify({"username": username}), 200


@user_blueprint.route("api/register", methods=["POST"])
def register_new_user():
    body = request.get_json()
    print(body)
    try:
        User(**body).save()
        return jsonify(success="User registered successfully"), 201
    except db.NotUniqueError:
        return jsonify(error="User or Email already exist"), 400
    except db.ValidationError as exc:
        return jsonify(error=exc.message), 400

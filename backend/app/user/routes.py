from flask import Blueprint, jsonify, request
from .model import User
from app import db
from flask_jwt_extended import create_access_token


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
        return jsonify(message="User or Email already exist"), 400
    except db.ValidationError as exc:
        return jsonify(message=exc.message), 400


@user_blueprint.route("/api/login", methods=["POST"])
def login():
    body = request.get_json()
    try:
        user = User.objects.get(username=body["username"])
        if user and user.verify_password(body["password"]):
            del user.password
            access_token = create_access_token(identity=user)
            return jsonify({"access_token": access_token}), 200
    except:
        return jsonify(message="Invalid username or password"), 401

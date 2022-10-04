from flask import Blueprint, request, jsonify
from app import db
from app.user_category.model import UserCategory

user_category_blueprint = Blueprint("/user/category", __name__)


@user_category_blueprint.route("", methods=["POST"])
def add_user_category():
    body = request.get_json()
    try:
        doc = UserCategory(**body).save()
        return jsonify(doc), 201
    except db.NotUniqueError:
        return jsonify(message="User Category already exist"), 400
    except db.ValidationError as exc:
        return jsonify(message=exc.message), 400


@user_category_blueprint.route("", methods=["GET"])
def get_all_categories():
    categories = UserCategory.objects()
    return jsonify(categories), 200

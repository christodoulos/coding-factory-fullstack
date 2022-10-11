from email import message
from flask import Blueprint, request, jsonify
from app import db
from app.user_category.model import UserCategory

user_category_blueprint = Blueprint("/user/category", __name__)


@user_category_blueprint.route("", methods=["POST"])
def add_user_category():
    body = request.get_json()
    print(body)
    try:
        doc = UserCategory(**body).save()
        return jsonify(doc), 201
    except db.NotUniqueError:
        return jsonify(message="Η κατηγορία χρήστη υπάρχει ήδη"), 400
    except db.ValidationError as exc:
        return jsonify(message=exc.message), 400


@user_category_blueprint.route("", methods=["GET"])
def get_all_categories():
    categories = UserCategory.objects()
    return jsonify(categories), 200


@user_category_blueprint.route("<category_id>", methods=["DELETE"])
def delete_user_category(category_id: str):
    try:
        doc = UserCategory.objects().with_id(category_id)
        doc.delete()
        return jsonify(doc), 200
    except db.ValidationError as exc:
        return jsonify(message="Η κατηγορία χρήστη δεν βρέθηκε"), 404


@user_category_blueprint.route("", methods=["PATCH"])
def update_user_category():
    body = request.get_json()
    try:
        doc = UserCategory.objects().with_id(body["id"])
        if doc:
            updated_doc = {"id": body["id"], "name": body["name"]}
            doc.update(**updated_doc)
            return jsonify(doc), 200
    except db.ValidationError as exc:
        return jsonify(message="Η κατηγορία χρήστη δεν βρέθηκε"), 404

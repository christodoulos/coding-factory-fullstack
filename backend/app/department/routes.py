from flask import Blueprint, request, jsonify
from app import db
from app.department.model import Department

department_blueprint = Blueprint("/department", __name__)


@department_blueprint.route("", methods=["POST"])
def create_department():
    body = request.get_json()
    try:
        doc = Department(**body).save()
        return jsonify(doc), 201
    except db.NotUniqueError:
        return jsonify(message="Η Διεύθυνση υπάρχει ήδη"), 400


@department_blueprint.route("", methods=["GET"])
def get_all_departments():
    departments = Department.objects()
    return jsonify(departments), 200


@department_blueprint.route("<department_id>", methods=["GET"])
def get_department(department_id: str):
    try:
        department = Department.objects().with_id(department_id)
        return jsonify(department), 201
    except db.ValidationError as exc:
        return jsonify(message="Department not found"), 404


@department_blueprint.route("", methods=["PATCH"])
def update_department():
    body = request.get_json()
    try:
        doc = Department.objects().with_id(body["id"])
        if doc:
            doc.update(**body)
            return jsonify(doc), 200
    except db.ValidationError as exc:
        return jsonify(message="Department not found"), 404

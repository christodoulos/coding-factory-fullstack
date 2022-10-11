from bson import ObjectId
from app import db


class SubDepartment(db.EmbeddedDocument):
    id = db.ObjectIdField(default=ObjectId)
    name = db.StringField(required=True)


class Department(db.Document):
    name = db.StringField(required=True)
    subdepartments = db.ListField(db.EmbeddedDocumentField(SubDepartment))

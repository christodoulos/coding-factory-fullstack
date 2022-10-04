from app import db


class UserCategory(db.Document):
    name = db.StringField(required=True, unique=True, min_length=1, max_length=50)

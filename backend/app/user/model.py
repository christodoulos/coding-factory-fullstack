from app import db, bcrypt
import mongoengine as me


class Name(db.EmbeddedDocument):
    givenName = db.StringField(required=True, min_length=1, max_length=20)
    surName = db.StringField(required=True, min_length=1, max_length=20)


class User(db.Document):
    username = db.StringField(required=True, unique=True, min_length=4, max_length=20)
    password = db.StringField(required=True, min_length=12, max_length=60)
    category = db.ObjectIdField(required=True)
    name = db.EmbeddedDocumentField(Name, required=True)
    email = db.EmailField(required=True, unique=True, max_length=50)
    isAdmin = db.BooleanField(default=False)
    authorizations = db.ListField(db.ObjectIdField(), default=[])

    @classmethod
    def pre_save(cls, sender, document, **kwargs):
        encrypted = bcrypt.generate_password_hash(document["password"]).decode("utf-8")
        document["password"] = encrypted

    def verify_password(self, password):
        return bcrypt.check_password_hash(self.password, password)


me.signals.pre_save.connect(User.pre_save, sender=User)

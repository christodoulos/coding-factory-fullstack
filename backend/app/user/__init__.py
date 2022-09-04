from .model import User, Name
from bson.objectid import ObjectId
from mongoengine.errors import NotUniqueError

try:
    adminName = Name(surName="Συστήματος", givenName="Διαχειριστής")
    User(
        isAdmin=True,
        username="root",
        password="changeme",
        email="root@donot.spam.com",
        name=adminName,
        category=ObjectId(),
    ).save()
    print("Created demo root user")
except NotUniqueError:
    print("Demo root user already in database")

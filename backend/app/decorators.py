from functools import wraps
from flask_jwt_extended import get_jwt, verify_jwt_in_request
from flask import jsonify, request


def admin_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            # print(request.headers)
            verify_jwt_in_request()
            claims = get_jwt()
            # print(claims)
            if claims["is_admin"]:
                return fn(*args, **kwargs)
            else:
                return jsonify(error="Administrator Role is required!"), 403

        return decorator

    return wrapper


def doc_owner_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            if (
                    claims["is_admin"]
                    or claims["username"] == request.view_args["username"]
            ):
                return fn(*args, **kwargs)
            else:
                return jsonify(error="Authorization is required!"), 403

        return decorator

    return wrapper

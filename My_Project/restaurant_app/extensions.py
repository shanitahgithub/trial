from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required, get_jwt_identity





from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
# from authors_app.extensions import db,migrate



db=SQLAlchemy()
migrate= Migrate()
bcrypt=Bcrypt()
jwt = JWTManager()
mail = Mail()
# message=Message()

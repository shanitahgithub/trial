"""changes

Revision ID: 5830594f8565
Revises: 3d11dcf60e91
Create Date: 2024-06-29 16:39:53.701168

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '5830594f8565'
down_revision = '3d11dcf60e91'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('contacts', schema=None) as batch_op:
        batch_op.drop_column('role')
        batch_op.drop_column('password')
        batch_op.drop_column('contact')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('contacts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('contact', mysql.VARCHAR(length=200), nullable=True))
        batch_op.add_column(sa.Column('password', mysql.VARCHAR(length=200), nullable=True))
        batch_op.add_column(sa.Column('role', mysql.VARCHAR(length=200), nullable=True))

    # ### end Alembic commands ###

"""changes

Revision ID: 363385de63a7
Revises: 2aa4a8925275
Create Date: 2024-07-04 00:48:02.828259

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '363385de63a7'
down_revision = '2aa4a8925275'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=100), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.drop_column('name')

    # ### end Alembic commands ###

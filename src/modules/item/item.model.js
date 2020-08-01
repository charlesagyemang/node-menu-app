import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Item = sequelize.define('items', {
  id: { type: Sequelize.STRING, primaryKey: true },

  // type{string [ENUM] },
  type: { type: Sequelize.STRING, allowNull: false },
  // categoryId {string},
  categoryId: { type: Sequelize.STRING, allowNull: false },
  // details{string},
  details: { type: Sequelize.STRING, allowNull: false },
  // name{string},
  name: { type: Sequelize.STRING, allowNull: false },
  // description{string},
  description: { type: Sequelize.STRING, allowNull: true },
  // others{JSONB others => {}}
  others: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },


});

Item.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Item;

import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Category = sequelize.define('categories', {
  id: { type: Sequelize.STRING, primaryKey: true },

  // name{string},
  name: { type: Sequelize.STRING, allowNull: false },
  // description{string},
  description: { type: Sequelize.STRING, allowNull: true },
  // others{JSONB others => {}}
  others: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },


});

Category.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Category;

import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Responses = sequelize.define('responses', {
  id: { type: Sequelize.STRING, primaryKey: true },

  // occasionId {string}
  categoryId: { type: Sequelize.STRING, allowNull: false },
  // group {string}
  group: { type: Sequelize.STRING, allowNull: false },
  // name {string}
  name: { type: Sequelize.STRING, allowNull: false },
  // categories ( JSONB categories => { result: [] })
  categories: { type: Sequelize.JSONB, allowNull: false },
  // items(JSONB items => { result: [] })
  items: { type: Sequelize.JSONB, allowNull: false },
  // others{JSONB others => {}}
  others: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },


});

Responses.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Responses;

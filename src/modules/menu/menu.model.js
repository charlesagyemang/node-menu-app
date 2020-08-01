import Sequelize from 'sequelize';
import sequelize from '../../db';
import Occassion from '../occassion/occassion.model';
// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Menu = sequelize.define('menus', {
  id: { type: Sequelize.STRING, primaryKey: true },
  // userId {string},
  userId: { type: Sequelize.STRING, allowNull: false },
  // name {string},
  name: { type: Sequelize.STRING, allowNull: false },
  // description {string},
  description: { type: Sequelize.STRING, allowNull: true },
  // categories { JSONB categories => { results: [] }},
  categories: { type: Sequelize.JSONB, allowNull: false },
  // items { JSONB items => { result: [] }},
  items: { type: Sequelize.JSONB, allowNull: false },
  // others { JSONB others => {}},
  others: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },
});

Menu.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};

const fk = { foreignKey: 'menuId' };

Menu.hasMany(Occassion, fk);
Occassion.belongsTo(Menu, fk);

export default Menu;

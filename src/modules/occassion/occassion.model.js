import Sequelize from 'sequelize';
import sequelize from '../../db';
import Response from '../responses/responses.model';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Occassion = sequelize.define('occassions', {
  id: { type: Sequelize.STRING, primaryKey: true },

  // menuId{string},
  menuId: { type: Sequelize.STRING, allowNull: false },
  // name{string},
  name: { type: Sequelize.STRING, allowNull: false },
  // description{string},
  description: { type: Sequelize.STRING, allowNull: true },
  // groupings { JSONB groupings => { results: [] }},
  groupings: { type: Sequelize.JSONB, allowNull: false },
  // others {JSONB others = {} },
  others: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },


});

Occassion.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};

const fk = { foreignKey: 'occassionId' };

Occassion.hasMany(Response, fk);
Response.belongsTo(Occassion, fk);

export default Occassion;

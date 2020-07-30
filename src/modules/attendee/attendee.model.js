import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Attendee = sequelize.define('attendees', {
  id: { type: Sequelize.STRING, primaryKey: true },

  eventId: { type: Sequelize.STRING, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  phoneNumber: { type: Sequelize.STRING, allowNull: false },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

  //other model attributes go here

});

Attendee.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Attendee;

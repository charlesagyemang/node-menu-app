import Sequelize from 'sequelize';
import sequelize from '../../db';
import Attendee from '../attendee/attendee.model';


// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Event = sequelize.define('events', {

  id: { type: Sequelize.STRING, primaryKey: true },
  userId: { type: Sequelize.STRING, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  location: { type: Sequelize.STRING, allowNull: false },
  time: { type: Sequelize.STRING, allowNull: false },
  date: { type: Sequelize.DATE, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

  //other model attributes go here

});

Event.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};

const fk = { foreignKey: 'eventId' };

Event.hasMany(Attendee, fk);
Attendee.belongsTo(Event, fk);


export default Event;

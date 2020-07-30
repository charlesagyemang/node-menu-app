'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('attendees', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    // refer to http://docs.sequelizejs.com/manual/migrations.html#migration-skeleton
      // on how to define a migration

    eventId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'events', key: 'id' } },


    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    phoneNumber: { type: Sequelize.STRING, allowNull: false },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('attendees'),
};

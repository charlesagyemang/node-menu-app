'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('events', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    userId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'users', key: 'id' } },

    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    location: { type: Sequelize.STRING, allowNull: false },
    time: { type: Sequelize.STRING, allowNull: false },
    date: { type: Sequelize.DATE, allowNull: true },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('events'),
};

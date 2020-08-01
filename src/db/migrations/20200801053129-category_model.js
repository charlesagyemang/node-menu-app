'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('categories', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    // name{string},
    name: { type: Sequelize.STRING, allowNull: false },
    // description{string},
    description: { type: Sequelize.STRING, allowNull: true },
    // others{JSONB others => {}}
    others: { type: Sequelize.JSONB, allowNull: true },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('categories'),
};

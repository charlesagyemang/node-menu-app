'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('menus', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    // userId {string},
    userId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'users', key: 'id' } },
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

  }),

  down: queryInterface => queryInterface.dropTable('menus'),
};

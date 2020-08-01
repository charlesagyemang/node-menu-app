'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('occassions', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    // menuId{string},
    menuId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'menus', key: 'id' } },
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

  }),

  down: queryInterface => queryInterface.dropTable('occassions'),
};

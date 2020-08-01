'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('items', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    // type{string [ENUM] },
    type: { type: Sequelize.STRING, allowNull: false },
    // categoryId {string},
    categoryId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'categories', key: 'id' } },
    // details{string},
    details: { type: Sequelize.STRING, allowNull: false },
    // name{string},
    name: { type: Sequelize.STRING, allowNull: false },
    // description{string},
    description: { type: Sequelize.STRING, allowNull: true },
    // others{JSONB others => {}}
    others: { type: Sequelize.JSONB, allowNull: true },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('items'),
};

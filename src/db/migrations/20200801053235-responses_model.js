'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('responses', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    // occasionId {string}
    occassionId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'occassions', key: 'id' } },
    // group {string}
    group: { type: Sequelize.STRING, allowNull: false },
    // name {string}
    name: { type: Sequelize.STRING, allowNull: false },
    // categories ( JSONB categories => { result: [] })
    categories: { type: Sequelize.JSONB, allowNull: false },
    // items(JSONB items => { result: [] })
    items: { type: Sequelize.JSONB, allowNull: false },
    // others{JSONB others => {}}
    others: { type: Sequelize.JSONB, allowNull: true },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('responses'),
};

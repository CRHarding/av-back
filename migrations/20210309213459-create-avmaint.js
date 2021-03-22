'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Avmaints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      acmodel: {
        type: Sequelize.STRING
      },
      engmodel: {
        type: Sequelize.STRING
      },
      ttaf: {
        type: Sequelize.INTEGER
      },
      ttsn: {
        type: Sequelize.INTEGER
      },
      smoh: {
        type: Sequelize.INTEGER
      },
      annualinsp: {
        type: Sequelize.BOOLEAN
      },
      awdirectives: {
        type: Sequelize.BOOLEAN
      },
      damagehist: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('avmaints');
  }
};

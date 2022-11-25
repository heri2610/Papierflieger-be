'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        type: Sequelize.STRING,
      },
      airplaneCode: {
        type: Sequelize.STRING,
      },
      flightFrom: {
        type: Sequelize.STRING,
      },
      flightTo: {
        type: Sequelize.STRING,
      },
      depatureTime: {
        type: Sequelize.TIME,
      },
      arrivalTime: {
        type: Sequelize.TIME,
      },
      totalTransite: {
        type: Sequelize.INTEGER,
      },
      transitePoint: {
        type: Sequelize.STRING,
      },
      transiteDuration: {
        type: Sequelize.TIME,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  },
};

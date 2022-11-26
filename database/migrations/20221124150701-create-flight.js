'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      flightNumber: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      airplaneCode: {
        type: Sequelize.STRING,
        references: {
          model: 'Airplanes',
          key: 'airplaneCode',
        },
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
      totalTransit: {
        type: Sequelize.INTEGER,
      },
      transitPoint: {
        type: Sequelize.STRING,
      },
      transitDuration: {
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
    await queryInterface.dropTable('Flights');
  },
};

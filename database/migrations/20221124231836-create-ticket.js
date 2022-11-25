'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      ticketNumber: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      passengerName: {
        type: Sequelize.STRING
      },
      trip: {
        type: Sequelize.STRING
      },
      flightNumber: {
        type: Sequelize.STRING
      },
      flightFrom: {
        type: Sequelize.STRING
      },
      flightTo: {
        type: Sequelize.STRING
      },
      boarding: {
        type: Sequelize.DATE
      },
      gate: {
        type: Sequelize.INTEGER
      },
      seat: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      baggage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};
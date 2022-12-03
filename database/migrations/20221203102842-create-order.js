'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      passengerName: {
        type: Sequelize.STRING
      },
      BirthDate: {
        type: Sequelize.DATE
      },
      seat: {
        type: Sequelize.STRING
      },
      gate: {
        type: Sequelize.INTEGER
      },
      nationality: {
        type: Sequelize.STRING
      },
      passportNumber: {
        type: Sequelize.STRING
      },
      issuingCountry: {
        type: Sequelize.STRING
      },
      expired: {
        type: Sequelize.DATE
      },
      NIK: {
        type: Sequelize.STRING
      },
      ticketId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('orders');
  }
};
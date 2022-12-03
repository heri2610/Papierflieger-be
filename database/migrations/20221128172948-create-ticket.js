'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ticketNumber: {
        type: Sequelize.INTEGER,
      },
      departureDate: {
        type: Sequelize.DATE,
      },
      departureTime: {
        type: Sequelize.TIME,
      },
      arrivalDate: {
        type: Sequelize.DATE,
      },
      arrivalTime: {
        type: Sequelize.TIME,
      },
      flightFrom: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airports',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      flightTo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airports',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airplanes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      price: {
        type: Sequelize.INTEGER,
      },
      totalTransit: {
        type: Sequelize.INTEGER,
      },
      transitPoint: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airports',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      transitDuration: {
        type: Sequelize.INTEGER,
      },
      ticketType: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Tickets');
  },
};

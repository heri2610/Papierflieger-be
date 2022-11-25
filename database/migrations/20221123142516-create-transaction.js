'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookingCode: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      ticketNumber: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tickets',
          key: 'ticketNumber'
        }
      },
      totalPayment: {
        type: Sequelize.INTEGER
      },
      bookingDate: {
        type: Sequelize.DATE
      },
      payDate: {
        type: Sequelize.DATE
      },
      payMethod: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentMethods',
          key: 'id'
        }
      },
      paymentProof: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Transactions');
  }
};
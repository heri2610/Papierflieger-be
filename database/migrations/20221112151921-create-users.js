"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gelar: {
        type: Sequelize.STRING,
      },
      kebangsaan: {
        type: Sequelize.STRING,
      },
      negara: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      hp: {
        type: Sequelize.STRING,
      },
      provinsi: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      tanggal_lahir: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      kabupaten: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("users");
  },
};

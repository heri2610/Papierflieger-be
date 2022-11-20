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
      title: {
        type: Sequelize.STRING,
      },
      nationality: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      birthdate: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      regency: {
        type: Sequelize.STRING,
      },
      verified: {
        type: Sequelize.BOOLEAN,
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

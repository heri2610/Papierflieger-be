'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    passengerName: DataTypes.STRING,
    BirthDate: DataTypes.DATE,
    seat: DataTypes.STRING,
    gate: DataTypes.INTEGER,
    nationality: DataTypes.STRING,
    passportNumber: DataTypes.STRING,
    issuingCountry: DataTypes.STRING,
    expired: DataTypes.DATE,
    NIK: DataTypes.STRING,
    ticketId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Transaction, { foreignKey: 'ticketNumber' });
    }
  }
  Ticket.init({
    ticketNumber: DataTypes.STRING,
    passengerName: DataTypes.STRING,
    trip: DataTypes.STRING,
    flightNumber: DataTypes.STRING,
    flightFrom: DataTypes.STRING,
    flightTo: DataTypes.STRING,
    boarding: DataTypes.DATE,
    gate: DataTypes.INTEGER,
    seat: DataTypes.STRING,
    price: DataTypes.INTEGER,
    baggage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};
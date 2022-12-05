'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, { foreignKey: 'ticketId' });
      this.belongsTo(models.Airplane, { foreignKey: 'airplaneId' });
      this.belongsTo(models.Airport, { as: 'from', foreignKey: 'flightFrom' });
      this.belongsTo(models.Airport, { as: 'to', foreignKey: 'flightTo' });
      this.belongsTo(models.Airport, {
        as: 'transit',
        foreignKey: 'transitPoint',
      });
    }
  }
  Ticket.init(
    {
      ticketNumber: DataTypes.INTEGER,
      departureDate: DataTypes.DATE,
      departureTime: DataTypes.TIME,
      arrivalDate: DataTypes.DATE,
      arrivalTime: DataTypes.TIME,
      flightFrom: DataTypes.INTEGER,
      flightTo: DataTypes.INTEGER,
      airplaneId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      totalTransit: DataTypes.INTEGER,
      transitPoint: DataTypes.INTEGER,
      transitDuration: DataTypes.STRING,
      ticketType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ticket',
    }
  );
  return Ticket;
};

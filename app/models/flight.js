'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Schedule, { through: 'flightNumber' });
      this.hasOne(models.Airplane, {
        foreignKey: 'airplaneCode',
      });
    }
  }
  Flight.init(
    {
      flightNumber: DataTypes.STRING,
      airplaneCode: DataTypes.STRING,
      flightFrom: DataTypes.STRING,
      flightTo: DataTypes.STRING,
      departureTime: DataTypes.TIME,
      arrivalTime: DataTypes.TIME,
      totalTransit: DataTypes.INTEGER,
      transitPoint: DataTypes.STRING,
      transitDuration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Flight',
    }
  );
  return Flight;
};

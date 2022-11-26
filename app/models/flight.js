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
      depatureTime: DataTypes.TIME,
      arrivalTime: DataTypes.TIME,
      totalTransite: DataTypes.INTEGER,
      transitePoint: DataTypes.STRING,
      transiteDuration: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'Flight',
    }
  );
  return Flight;
};

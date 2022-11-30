'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Ticket, { as: 'from', foreignKey: 'flightFrom' });
      this.hasMany(models.Ticket, { as: 'to', foreignKey: 'flightTo' });
      this.hasMany(models.Ticket, { as: 'transit', foreignKey: 'transitPoint' });
      this.hasMany(models.Destination, { foreignKey: 'airportId' });
    }
  }
  Airport.init({
    airportName: DataTypes.STRING,
    city: DataTypes.STRING,
    cityCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airport, { foreignKey: 'airportId' });
      this.hasMany(models.Wishlist, { foreignKey: 'destinationId' });
    }
  }
  Destination.init({
    name: DataTypes.STRING,
    image: DataTypes.ARRAY(DataTypes.STRING),
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    airportId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};
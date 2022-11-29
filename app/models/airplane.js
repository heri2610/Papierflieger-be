'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Ticket, { foreignKey: 'airplaneId' });
    }
  }
  Airplane.init({
    airplaneName: DataTypes.STRING,
    airplaneCode: DataTypes.STRING,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
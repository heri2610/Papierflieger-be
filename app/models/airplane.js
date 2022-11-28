'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Flight, {
        through: 'flights',
        foreignKey: 'airplaneCode',
      });
    }
  }
  Airplane.init(
    {
      airplaneCode: DataTypes.STRING,
      type: DataTypes.STRING,
      seatCapacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Airplane',
    }
  );
  return Airplane;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.flight);
    }
  }
  airplane.init(
    {
      ariplaneCode: DataTypes.STRING,
      type: DataTypes.STRING,
      seatCapacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'airplane',
    }
  );
  return airplane;
};

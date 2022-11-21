'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class verify extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  verify.init(
    {
      userId: DataTypes.INTEGER,
      tokenVerify: DataTypes.STRING,
      expired: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'verify',
    }
  );
  return verify;
};

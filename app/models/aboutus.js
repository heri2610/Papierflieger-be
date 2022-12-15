'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aboutUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aboutUs.init({
    name: DataTypes.STRING,
    avatar: DataTypes.TEXT,
    bidang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'aboutUs',
  });
  return aboutUs;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    gelar: DataTypes.STRING,
    kebangsaan: DataTypes.STRING,
    negara: DataTypes.STRING,
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    hp: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    password: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    email: DataTypes.STRING,
    kabupaten: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
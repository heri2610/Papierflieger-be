"use strict";
const { Model } = require("sequelize");
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
  users.init(
    {
      title: DataTypes.STRING,
      nationality: DataTypes.STRING,
      country: DataTypes.STRING,
      username: DataTypes.STRING,
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      province: DataTypes.STRING,
      password: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      email: DataTypes.STRING,
      regency: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};

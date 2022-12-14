"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Transaction, { foreignKey: 'userId' });
      this.hasMany(models.History, { foreignKey: 'userId' });
    }
  }
  Users.init(
    {
      title: DataTypes.STRING,
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      nationality: DataTypes.STRING,
      country: DataTypes.STRING,
      province: DataTypes.STRING,
      regency: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: "Customer",
      },
      avatar: {
        type: DataTypes.TEXT,
        defaultValue: "https://ik.imagekit.io/lscxjpnrv/defaultava.png",
      },
      verified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: 'userId' });
    }
  }
  notification.init({
    name: DataTypes.STRING,
    message: DataTypes.TEXT,
    read: { type: DataTypes.BOOLEAN, defaultValue: false },
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'notification',
  });
  return notification;
};
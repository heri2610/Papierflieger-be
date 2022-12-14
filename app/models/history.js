'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: 'userId' });
      this.belongsTo(models.Transaction, { foreignKey: 'transactionId' });
    }
  }
  History.init({
    userId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};
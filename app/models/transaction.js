'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: 'userId' });
      this.belongsTo(models.Payment, { foreignKey: 'paymentId' });
      this.belongsTo(models.Order, { foreignKey: 'orderId' });
      this.hasMany(models.History, { foreignKey: 'transactionId' });
    }
  }
  Transaction.init(
    {
      userId: DataTypes.INTEGER,
      tokenTransaction:DataTypes.TEXT,
      paymentId: DataTypes.INTEGER,
      trip: DataTypes.STRING,
      orderId: DataTypes.ARRAY(DataTypes.INTEGER),
      totalPrice: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Transaction',
    }
  );
  return Transaction;
};

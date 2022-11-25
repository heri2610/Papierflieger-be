'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.PaymentMethod, { foreignKey: 'payMethod' });
      this.belongsTo(models.users, { foreignKey: 'userId' });
      this.belongsTo(models.Ticket, { foreignKey: 'ticketNumber' });
    }
  }
  Transaction.init({
    bookingCode: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    ticketNumber: DataTypes.STRING,
    totalPayment: DataTypes.INTEGER,
    bookingDate: DataTypes.DATE,
    payDate: DataTypes.DATE,
    payMethod: DataTypes.INTEGER,
    paymentProof: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
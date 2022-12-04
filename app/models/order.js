'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Ticket, { foreignKey: 'ticketId' });
      this.hasMany(models.Transaction, { foreignKey: 'orderId' });
    }
  }
  Order.init(
    {
      passengerName: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      seat: DataTypes.STRING,
      gate: DataTypes.INTEGER,
      nationality: DataTypes.STRING,
      passportNumber: DataTypes.STRING,
      issuingCountry: DataTypes.STRING,
      expired: DataTypes.DATE,
      NIK: DataTypes.STRING,
      ticketId: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};

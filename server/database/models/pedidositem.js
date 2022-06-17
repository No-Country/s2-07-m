'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidosItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PedidosItem.init({
<<<<<<< HEAD
    cantidad: DataTypes.INTEGER,
    pedidoId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
=======
    cantidad: DataTypes.INTEGER
>>>>>>> 8a3ee0b388d7bd0a68f8b31787731c9711e48ce1
  }, {
    sequelize,
    modelName: 'PedidosItem',
    paranoid: true,
    timestamps:true,
  });
  return PedidosItem;
};
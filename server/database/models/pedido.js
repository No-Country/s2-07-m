'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo( models.Mesa, {foreignKey: 'mesaId'});
      Pedido.belongsToMany( models.Item, {
        through:'PedidosItem',
        foreignKey: 'pedidoId',
        otherKey: 'itemId',
        timestamps: true
      });
    }
  };
  Pedido.init({
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
    paranoid: true,
    timestamps:true,
  });
  return Pedido;
};
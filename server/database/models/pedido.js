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
<<<<<<< HEAD
    estado: DataTypes.STRING,
    mesaId: DataTypes.INTEGER
=======
    estado: DataTypes.STRING
>>>>>>> 8a3ee0b388d7bd0a68f8b31787731c9711e48ce1
  }, {
    sequelize,
    modelName: 'Pedido',
    paranoid: true,
    timestamps:true,
  });
  return Pedido;
};
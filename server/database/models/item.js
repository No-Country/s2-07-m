'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo( models.Categoria, {foreignKey: 'categoriaId'});
      Item.belongsToMany( models.Pedido, {
        through:'PedidosItem',
        foreignKey: 'itemId',
        otherKey: 'pedidoId',
        timestamps: true
      });
    }
  };
  Item.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
<<<<<<< HEAD
    precio: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
=======
    precio: DataTypes.INTEGER
>>>>>>> 8a3ee0b388d7bd0a68f8b31787731c9711e48ce1
  }, {
    sequelize,
    modelName: 'Item',
    paranoid: true,
    timestamps:true,
  });
  return Item;
};
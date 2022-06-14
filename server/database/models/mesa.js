'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mesa.belongsTo( models.Tienda, {foreignKey: 'tiendaId'});
      Mesa.hasMany(models.Pedido, { foreignKey: 'mesaId' });
    }
  };
  Mesa.init({
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mesa',
    paranoid: true,
    timestamps:true,
  });
  return Mesa;
};
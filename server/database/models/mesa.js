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
<<<<<<< HEAD
    numero: DataTypes.INTEGER,
    tiendaId: DataTypes.INTEGER
=======
    numero: DataTypes.INTEGER
>>>>>>> 8a3ee0b388d7bd0a68f8b31787731c9711e48ce1
  }, {
    sequelize,
    modelName: 'Mesa',
    paranoid: true,
    timestamps:true,
  });
  return Mesa;
};
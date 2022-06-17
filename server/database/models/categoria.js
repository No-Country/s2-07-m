'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categoria.belongsTo( models.Tienda, {foreignKey: 'tiendaId'});
      Categoria.hasMany(models.Item, { foreignKey: 'categoriaId' });
    }
  };
  Categoria.init({
<<<<<<< HEAD
    nombre: DataTypes.STRING,
    tiendaId: DataTypes.INTEGER
=======
    nombre: DataTypes.STRING
>>>>>>> 8a3ee0b388d7bd0a68f8b31787731c9711e48ce1
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};
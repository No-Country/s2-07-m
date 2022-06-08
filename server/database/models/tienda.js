'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tienda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tienda.init({
    nombre: DataTypes.STRING,
    logo: DataTypes.STRING,
    banner: DataTypes.STRING,
    pais: DataTypes.STRING,
    provincia: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    horarioApertura: DataTypes.TIME,
    horacioCierre: DataTypes.TIME,
    lunes: DataTypes.BOOLEAN,
    martes: DataTypes.BOOLEAN,
    miercoles: DataTypes.BOOLEAN,
    jueves: DataTypes.BOOLEAN,
    viernes: DataTypes.BOOLEAN,
    sabado: DataTypes.BOOLEAN,
    domingo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tienda',
  });
  return Tienda;
};
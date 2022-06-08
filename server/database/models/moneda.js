'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Moneda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Moneda.init({
    nombre: DataTypes.STRING,
    simbolo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Moneda',
  });
  return Moneda;
};
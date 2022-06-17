//'use strict';
//const { sequelize } = require("../config/")
// const { sequelizee } = require('../config/mysql');
// module.exports = (sequelize, DataTypes) => {
//   class Usuario extends sequelizee {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Usuario.hasMany(models.Tienda, { foreignKey: 'usuarioId' });
//     }
//   };
//   Usuario.init({
//     nombre: DataTypes.STRING,
//     apellido: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelizee,
//     modelName: 'Usuario',
//     paranoid: true,
//     timestamps:true,
//   });
//   return Usuario;
// };
const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const User = sequelize.define(
  "Usuarios" ,
  { 
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
      sequelize,
      modelName: 'Usuarios',
      paranoid: true,
      timestamps:true,
    }

);
module.exports = User;

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tiendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      banner: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      horarioApertura: {
        type: Sequelize.TIME
      },
      horacioCierre: {
        type: Sequelize.TIME
      },
      lunes: {
        type: Sequelize.BOOLEAN
      },
      martes: {
        type: Sequelize.BOOLEAN
      },
      miercoles: {
        type: Sequelize.BOOLEAN
      },
      jueves: {
        type: Sequelize.BOOLEAN
      },
      viernes: {
        type: Sequelize.BOOLEAN
      },
      sabado: {
        type: Sequelize.BOOLEAN
      },
      domingo: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tiendas');
  }
};
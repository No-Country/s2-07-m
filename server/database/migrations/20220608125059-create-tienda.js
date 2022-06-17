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
        allowNull: false,
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      banner: {
        type: Sequelize.STRING
      },
      pais: {
        allowNull: false,
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
<<<<<<< HEAD
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key:'id',
        }
      },
      monedaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Monedas',
          key:'id',
        }
      },
=======
>>>>>>> 8a3ee0b388d7bd0a68f8b31787731c9711e48ce1
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
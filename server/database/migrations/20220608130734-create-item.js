'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
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
      imagen: {
        type: Sequelize.STRING
      },
      precio: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categoria',
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
    await queryInterface.dropTable('Items');
  }
};
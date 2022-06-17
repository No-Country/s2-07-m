'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PedidosItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        allowNull: false,
        default: 1,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
      pedidoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pedidos',
          key:'id',
        }
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
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
    await queryInterface.dropTable('PedidosItems');
  }
};
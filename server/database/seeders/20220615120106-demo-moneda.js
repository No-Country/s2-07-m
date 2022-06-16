'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Monedas', [{
      nombre: 'Peso Argentino',
      simbolo: '$',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      nombre: 'Peso Colombiano',
      simbolo: '$',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      nombre: 'Dolar Estados Unidos',
      simbolo: 'U$S',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

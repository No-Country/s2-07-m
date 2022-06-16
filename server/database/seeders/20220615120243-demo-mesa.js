'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Mesas', [{
      numero: 1,
      tiendaId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      numero: 2,
      tiendaId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      numero: 3,
      tiendaId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      numero: 4,
      tiendaId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      numero: 5,
      tiendaId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      numero: 6,
      tiendaId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
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

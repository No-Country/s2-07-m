'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tiendas', [{
      nombre: 'NoCountry Restaurante',
      pais: 'Argentina',
      horarioApertura: '11:30:00',
      horacioCierre: '23:30:00',
      lunes: false,
      martes: false,
      miercoles: false,
      jueves: true,
      viernes: true,
      sabado: true,
      domingo: true,
      monedaId: 1,
      usuarioId: 1,
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

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('pedido', [
     
     /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
     {
      idpedido: 1,
      fechapedido: "2023-08-01",
      estadopedido: "En proceso",
      total: 3.25
     },
     {
      idpedido: 2,
      fechapedido: " 2023-08-02",
      estadopedido: "Completado",
      total:  1.25
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('pedido', null, {});
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('categoria', [
     
     /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
     {
      idcategoria: 1,
      nombre: "Frutas",
      descripcion: "Productos frescos y naturales"
     },
     {
      idcategoria: 2,
      nombre: "Verduras",
      descripcion: "Variedad de verduras frescas"
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('categoria', null, {});
  }
};
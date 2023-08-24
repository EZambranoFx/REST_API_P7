'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('cliente', [
     
     /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
     {
      idcliente: 1,
      nombre: "Ana",
      apellido: "Gomez",
      direccion: "Calle 789",
      correo: "ana@email.com",
      telefono: "555-9876"
     },
     {
      idcliente: 2,
      nombre: "Carlos",
      apellido: "Rodriguez",
      direccion: "Avenida 012",
      correo: "carlos@email.com",
      telefono: "555-5432"
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('cliente', null, {});
  }
};

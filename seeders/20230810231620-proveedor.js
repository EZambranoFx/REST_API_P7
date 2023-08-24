'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('proveedor', [
     
     /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
     {
      idproveedor: 1,
      nombreempresa: "Frutas Ricas S.A.",
      personacontacto: "Juan Perez",
      telefono: "555-1234",
      correo: "juan@frutasricas.com",
      direccion: "Calle 123"
     },
     {
      idproveedor: 2,
      nombreempresa: "Verduras Verdes Ltda.",
      personacontacto: "Maria Lopez",
      telefono: "555-5678",
      correo: "maria@verdurasverdes.com",
      direccion: "Avenida 456"
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('proveedor', null, {});
  }
};

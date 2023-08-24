'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('producto', [
     
     /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
     {
      idproducto: 1,
      nombre: "Manzana",
      precio: "1.5",
      descripcion: "Manzana fresca y jugosa",
      stock: "100",
      categoria_idcategoria: 1,
      proveedor_idproveedor: 1
     },
     {
      idproducto: 2,
      nombre: "Platano",
      precio: "0.75",
      descripcion: "Plátano maduro",
      stock: "150",
      categoria_idcategoria: 1,
      proveedor_idproveedor: 1
     },
     {
      idproducto: 3,
      nombre: "Zanahoria",
      precio: "0.5",
      descripcion: "Zanahoria naranja y crujiente",
      stock: "200",
      categoria_idcategoria: 2,
      proveedor_idproveedor: 2
     },
     {
      idproducto: 4,
      nombre: "tomate",
      precio: "1.2",
      descripcion: "Rojo y fresco",
      stock: "120",
      categoria_idcategoria: 2,
      proveedor_idproveedor: 2
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('producto', null, {});
  }
};

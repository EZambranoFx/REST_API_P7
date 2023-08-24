const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoproducto', {
    pedido_idpedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedido',
        key: 'idpedido'
      }
    },
    producto_idproducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producto',
        key: 'idproducto'
      }
    }
  }, {
    sequelize,
    tableName: 'pedidoproducto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
          { name: "producto_idproducto" },
        ]
      },
      {
        name: "fk_pedido_has_producto_producto1_idx",
        using: "BTREE",
        fields: [
          { name: "producto_idproducto" },
        ]
      },
      {
        name: "fk_pedido_has_producto_pedido1_idx",
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
        ]
      },
    ]
  });
};

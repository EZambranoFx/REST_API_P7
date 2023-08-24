const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidocliente', {
    pedido_idpedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedido',
        key: 'idpedido'
      }
    },
    cliente_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cliente',
        key: 'idcliente'
      }
    }
  }, {
    sequelize,
    tableName: 'pedidocliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
          { name: "cliente_idcliente" },
        ]
      },
      {
        name: "fk_pedido_has_cliente_cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "cliente_idcliente" },
        ]
      },
      {
        name: "fk_pedido_has_cliente_pedido1_idx",
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
        ]
      },
    ]
  });
};

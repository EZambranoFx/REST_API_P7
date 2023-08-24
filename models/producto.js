const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    idproducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    precio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    stock: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    categoria_idcategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'idcategoria'
      }
    },
    proveedor_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedor',
        key: 'idproveedor'
      }
    }
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproducto" },
        ]
      },
      {
        name: "fk_producto_categoria_idx",
        using: "BTREE",
        fields: [
          { name: "categoria_idcategoria" },
        ]
      },
      {
        name: "fk_producto_proveedor1_idx",
        using: "BTREE",
        fields: [
          { name: "proveedor_idproveedor" },
        ]
      },
    ]
  });
};

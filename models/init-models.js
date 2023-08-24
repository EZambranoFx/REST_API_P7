var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _cliente = require("./cliente");
var _pedido = require("./pedido");
var _pedidocliente = require("./pedidocliente");
var _pedidoproducto = require("./pedidoproducto");
var _producto = require("./producto");
var _proveedor = require("./proveedor");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var pedidocliente = _pedidocliente(sequelize, DataTypes);
  var pedidoproducto = _pedidoproducto(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var proveedor = _proveedor(sequelize, DataTypes);

  cliente.belongsToMany(pedido, { as: 'pedido_idpedido_pedidos', through: pedidocliente, foreignKey: "cliente_idcliente", otherKey: "pedido_idpedido" });
  pedido.belongsToMany(cliente, { as: 'cliente_idcliente_clientes', through: pedidocliente, foreignKey: "pedido_idpedido", otherKey: "cliente_idcliente" });
  pedido.belongsToMany(producto, { as: 'producto_idproducto_productos', through: pedidoproducto, foreignKey: "pedido_idpedido", otherKey: "producto_idproducto" });
  producto.belongsToMany(pedido, { as: 'pedido_idpedido_pedido_pedidoproductos', through: pedidoproducto, foreignKey: "producto_idproducto", otherKey: "pedido_idpedido" });
  producto.belongsTo(categoria, { as: "categoria_idcategoria_categorium", foreignKey: "categoria_idcategoria"});
  categoria.hasMany(producto, { as: "productos", foreignKey: "categoria_idcategoria"});
  pedidocliente.belongsTo(cliente, { as: "cliente_idcliente_cliente", foreignKey: "cliente_idcliente"});
  cliente.hasMany(pedidocliente, { as: "pedidoclientes", foreignKey: "cliente_idcliente"});
  pedidocliente.belongsTo(pedido, { as: "pedido_idpedido_pedido", foreignKey: "pedido_idpedido"});
  pedido.hasMany(pedidocliente, { as: "pedidoclientes", foreignKey: "pedido_idpedido"});
  pedidoproducto.belongsTo(pedido, { as: "pedido_idpedido_pedido", foreignKey: "pedido_idpedido"});
  pedido.hasMany(pedidoproducto, { as: "pedidoproductos", foreignKey: "pedido_idpedido"});
  pedidoproducto.belongsTo(producto, { as: "producto_idproducto_producto", foreignKey: "producto_idproducto"});
  producto.hasMany(pedidoproducto, { as: "pedidoproductos", foreignKey: "producto_idproducto"});
  producto.belongsTo(proveedor, { as: "proveedor_idproveedor_proveedor", foreignKey: "proveedor_idproveedor"});
  proveedor.hasMany(producto, { as: "productos", foreignKey: "proveedor_idproveedor"});

  return {
    categoria,
    cliente,
    pedido,
    pedidocliente,
    pedidoproducto,
    producto,
    proveedor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

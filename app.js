var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* MÓDULO dotenv */
const dotenv = require('dotenv');
/* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
dotenv.config();

/* REFERENCIA AL MÓDULO */
const swaggerUi = require('swagger-ui-express');

/* REFERENCIA AL ARCHIVO GENERADO */
const swaggerFile = require('./swagger_output.json');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* MÓDULO CORS */
var cors = require('cors')

/* CARGA DEL MIDDLEWARE authenticateJWT */
var authenticateJWT = require('./middleware/auth');

var app = express();

/*MIDDLEWARE CORS */
app.use(cors());

var categoriaRouter = require('./routes/rest_categoria');
var clienteRouter = require('./routes/rest_cliente');
var pedidoRouter = require('./routes/rest_pedido');
var productoRouter = require('./routes/rest_producto');
var proveedorRouter = require('./routes/rest_proveedor');
var pedidoclienteRouter = require('./routes/rest_pedidocliente');
var pedidoproductoRouter = require('./routes/rest_pedidoproducto');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/rest/categoria', categoriaRouter);
app.use('/rest/cliente', authenticateJWT, clienteRouter);/* USO DE LA FUNCIÓN authenticateJWT */
app.use('/rest/pedido', pedidoRouter);
app.use('/rest/producto', productoRouter);
app.use('/rest/proveedor', proveedorRouter);
app.use('/rest/pedidocliente', pedidoclienteRouter);
app.use('/rest/pedidoproducto', pedidoproductoRouter);

/* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

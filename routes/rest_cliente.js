var express = require('express');
var router = express.Router();
const cliente = require('../models').cliente;
/* GET users listing. */
router.get('/findAll/json', function (req, res, next) {
  /* VERIFICADOR DE AUTORIZACIÓN */
  const { rol } = req.user;
  if (rol !== 'admin') {
    return res.sendStatus(403);
  }
  /* MÉTODO ESTÁTICO findAll  */
  cliente.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
  })
    .then(resultado => {
      res.json(resultado);
    })
    .catch(error => res.status(400).send(error))

});

//REST API: GET-id
router.get('/findById/:id/json', function (req, res, next) {

  let id = req.params.id;

  cliente.findByPk(id)
    .then(instancia => {
      if (instancia) {
        res.status(200).json(instancia);
      } else {
        res.status(404).json({ error: "No existe registro con el identificador " + id })
      }
    })
    .catch(error => res.status(400).send(error))
});

//REST API: POST
router.post('/save', function (req, res, next) {

  cliente.create(req.body)
    .then(instancia => {
      res.status(201).json(instancia);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al crear el registro' });
    });

});

//REST API: PUT
router.put('/update/:id', function (req, res, next) {

  let id = req.params.id;

  cliente.findByPk(id)
    .then(instancia => {
      if (instancia) {

        instancia.update(req.body)
          .then(instanciaActualizada => {
            res.status(201).json(instanciaActualizada);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({ error: "No existe registro con el identificador " + id })
      }
    })
    .catch(error => res.status(400).send(error))

});

//REST API: DELETE
router.delete('/delete/:id', function (req, res, next) {

  let id = req.params.id;

  cliente.findByPk(id)
    .then(instancia => {
      if (instancia) {

        instancia.destroy()
          .then(() => {
            res.status(204).json({ mensaje: 'Registro eliminado' });
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({ error: "No existe registro con el identificador " + id })
      }
    })
    .catch(error => res.status(400).send(error))

});

//curl -X POST -d "idcliente=3&nombre=Pedro&apellido=Pancho&direccion=av105&correo=pedro@email.com&telefono=0985112338" http://localhost:3000/rest/cliente/save
//curl -X GET http://localhost:3000/rest/cliente/findById/3/json
//curl -X GET http://localhost:3000/rest/cliente/findAll/json
//curl -X PUT -d "nombre=Pablo&apellido=Knowledge&direccion=Mz142&correo=pablo@email.com&telefono=445-1460" http://localhost:3000/rest/cliente/update/3
//curl -X DELETE http://localhost:3000/rest/cliente/delete/3    <------BORRADO POR ID
module.exports = router;

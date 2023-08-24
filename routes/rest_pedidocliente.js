var express = require('express');
var router = express.Router();
const pedidocliente = require('../models').pedidocliente;
/* GET users listing. */
router.get('/findAll/json', function (req, res, next) {

  /* MÉTODO ESTÁTICO findAll  */

  pedidocliente.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
  })
    .then(resultado => {
      res.json(resultado);
    })
    .catch(error => res.status(400).send(error))

});

//REST API: GET-id
router.get('/findById/:id/json', function(req, res, next) {  

  let id = req.params.id;

  pedidocliente.findByPk(id)
      .then(instancia => {
        if(instancia) {
          res.status(200).json(instancia);
        } else {
          res.status(404).json({error: "No existe registro con el identificador "+id})
        }
      })
      .catch(error => res.status(400).send(error))
});

//REST API: POST
router.post('/save', function(req, res, next) {  

  pedidocliente.create(req.body)
    .then(instancia => {
      res.status(201).json(instancia);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al crear el registro' });
    });

});

//REST API: PUT
router.put('/update/:id', function(req, res, next) {  

  let id = req.params.id;

  pedidocliente.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.update(req.body)
          .then(instanciaActualizada => {
            res.status(201).json(instanciaActualizada);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});

/* REST API: DELETE
 router.delete('/delete/:id', function(req, res, next) {  

        let id = req.params.id;

        pedidocliente.findByPk(id)
          .then(instancia => {
            if(instancia) {

              instancia.destroy()
                .then(() => {
                  res.status(204).json({ mensaje: 'Registro eliminado'});
                })
                .catch(error => {
                  res.status(500).json({ error: 'Error al actualizar el registro' });
                });

            } else {
              res.status(404).json({error: "No existe registro con el identificador "+id})
            }
          })
          .catch(error => res.status(400).send(error))
		  
      });
*/ 

//PETICIONES
/*
curl -X GET http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json
curl -X GET http://localhost:3000/rest/<NOMBRE_CLASE>/findById/<ID>/json
curl -X POST -d "<ATRIBUTO1>=<VALOR1>&...&<ATRIBUTON>=<VALORN>" http://localhost:3000/rest/<NOMBRE_CLASE>/save
 curl -X PUT -d "<ATRIBUTO1>=<VALOR1>&...&<ATRIBUTON>=<VALORN>" http://localhost:3000/rest/<NOMBRE_CLASE>/update/<ID>
 curl -X DELETE http://localhost:3000/rest/<NOMBRE_CLASE>/delete/<ID>
*/

module.exports = router;

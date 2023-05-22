const express = require('express');
var mysql      = require('mysql');
const bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Elvis',
  password : 'FER123456FER20',
 
});

const puerto =3000;

const app = express();

connection.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

////*******************************////

///Trae todos los Restaurante con todos sus campos
app.get('/restariante', ( req, res) =>{
  connection.query('SELECT * FROM examen.Restariante', function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})


///Traer un restaruante filtrada por id
app.get('/Restariante/:id', (req, res) =>{
  const {id} = req.params;
  connection.query('SELECT id FROM examen.Restariante WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows[0])
  });  
})

///Crea un restaruante
app.post('/api/Restariante', (req, res) =>{
  const {descripcion} = req.body;
  
  connection.query('Insert into .Restariante (Descripcion) Values (?);', [descripcion] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Modificar un restaruante
app.put('/api/restariante/:id', (req, res) =>{
  const {id} = req.params;
  const {descripcion} = req.body;
  connection.query('Update examen.Restariante SET Descripcion = ? WHERE id = ?', [descripcion, id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Eliminar una restaruante
app.delete('/api/restariante/:id', (req, res) =>{
  const {id} = req.params;
  //Consultar si el id existe

  //Si existe borrarlo
  connection.query('Delete from examen.Restariante WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  

  //Si no existe, retornar 404.
})


////**************menu*****************////
app.get('/menu', (req, res) =>{
  connection.query('SELECT id, Descripcion FROM examen.menu', function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})


///Traer un menu por id
app.get('/api/menu/:id', (req, res) =>{
  const {id} = req.params;
  connection.query('SELECT id, Descripcion FROM examen.menu WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows[0])
  });  
})

///Crea un menu
app.post('/api/menu', (req, res) =>{
  const {descripcion} = req.body;
  
  connection.query('Insert into examen.menu (Descripcion) Values (?);', [descripcion] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Modificar un menu
app.put('/api/menu/:id', (req, res) =>{
  const {id} = req.params;
  const {descripcion} = req.body;
  connection.query('Update examen.menu SET Descripcion = ? WHERE id = ?', [descripcion, id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Eliminar un menu
app.delete('/api/menu/:id', (req, res) =>{
  const {id} = req.params;
  //Consultar si el id existe

  //Si existe borrarlo
  connection.query('Delete from examen.menu WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  

  //Si no existe, retornar 404.
})

////**************opiniones*****************////
app.get('/opiniones', (req, res) =>{
  connection.query('SELECT id, nombre_cliente, comemtario, calificacionesds FROM examen.opiniones', function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})


///Traer un opinion filtrada por id
app.get('/api/opiniones:id', (req, res) =>{
  const {id} = req.params;
  connection.query('SELECT id, nombre_cliente, comentario FROM examen.opiniones WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows[0])
  });  
})

///Crea un opinion
app.post('/api/opiniones', (req, res) =>{
  const {Nombre_cliente} = req.body;
  
  connection.query('Insert into examen.opiniones (nombre_cliente) Values (?);', [Nombre_cliente] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Modificar un opinion
app.put('/api/opiniones/:id', (req, res) =>{
  const {id} = req.params;
  const {calificacion} = req.body;
  connection.query('Update examen.opiniones SET calificacion = ? WHERE id = ?', [calificacion, id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Eliminar un opinion
app.delete('/api/opiniones/:id', (req, res) =>{
  const {id} = req.params;
  //Consultar si el id existe

  //Si existe borrarlo
  connection.query('Delete from examen.opiniones WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  

  //Si no existe, retornar 404.
})

////**************plato*****************////
app.get('/plato', (req, res) =>{
  connection.query('SELECT id, Descripcion FROM examen.plato', function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Traer un plato filtrada por id
app.get('/api/plato/:id', (req, res) =>{
  const {id} = req.params;
  connection.query('SELECT id, Descripcion FROM examen.plato WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows[0])
  });  
})

///Crea un plato
app.post('/api/plato', (req, res) =>{
  const {descripcion} = req.body;
  
  connection.query('Insert into examen.plato (Descripcion) Values (?);', [descripcion] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Modificar un plato
app.put('/api/plato/:id', (req, res) =>{
  const {id} = req.params;
  const {descripcion} = req.body;
  connection.query('Update examen.plato SET Descripcion = ? WHERE id = ?', [descripcion, id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Eliminar un plato
app.delete('/api/plato/:id', (req, res) =>{
  const {id} = req.params;
  //Consultar si el id existe

  //Si existe borrarlo
  connection.query('Delete from examen.plato WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  

  //Si no existe, retornar 404.
})

////**************reservaciones*****************////
app.get('/reservaciones', (req, res) =>{
  connection.query('SELECT * FROM examen.reservaciones;', function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})


///Traer una reservacion filtrada por id
app.get('/api/reservaciones/:id', (req, res) =>{
  const {id} = req.params;
  connection.query('SELECT id, nombre_cliente FROM examen.reservaciones WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows[0])
  });  
})

///Crea una reservacion
app.post('/api/reservacion', (req, res) =>{
  const {Nombre_cliente} = req.body;
  
  connection.query('Insert into examne.reservaciones (nombre_cliente) Values (?);', [Nombre_cliente] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Modificar una reservacion
app.put('/api/reservacion/:id', (req, res) =>{
  const {id} = req.params;
  const {Nombre_cliente} = req.body;
  connection.query('Update examen.reservaciones SET  nombre_cliente = ? WHERE id = ?', [Nombre_cliente, id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

///Eliminar una reservacion
app.delete('/api/reservacion/:id', (req, res) =>{
  const {id} = req.params;
  //Consultar si el id existe

  //Si existe borrarlo
  connection.query('Delete from examen.reservaciones WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  

  //Si no existe, retornar 404.
})
app.listen(puerto, () => {
  console.log(`La aplicación se está ejecutando ${puerto}`)
});


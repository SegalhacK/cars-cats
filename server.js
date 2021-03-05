const express = require("express");
// const session = require('express-session');
// const flash = require('connect-flash');

const app = express();
const port = 8000;

// app.use(session({secret: 'mipropiaclave'}));  
// app.use(flash());

// para los posts
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Para las vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// para archivos estaticos
app.use('/static', express.static("static"));

// importar las rutas
// app.use(require('./routes/auth'));
app.use(require('./routes/router'));


// Lanzamos nuestra aplicación
const server = app.listen(port, function() {
  console.log('Escuchando en el puerto ' + port);
});

//Hardcodded data


let cars = [
  {brand: "Koenigsegg", model: "agera", hp: 500},
  {brand: "Infiniti", model: "q60", hp: 250},
  {brand: "Peugeot", model: "206", hp: 120},
  {brand: "Audi", model: "q7", hp: 180},
];

module.exports = cars;

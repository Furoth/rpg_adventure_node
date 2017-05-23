var express = require('express');
var app = express();
var rutas = require('./routes/routes');
app.set('view engine', 'ejs');


app.use(express.static('public'));

//Rutas
app.use("/", rutas);

app.listen(8080);
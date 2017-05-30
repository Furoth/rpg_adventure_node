var express = require('express');
var app = express();
var server = require('http').Server(app); 
var io = require('socket.io')(server); 
var rutas = require('./routes/routes');
var Personajes = require('./models/schema').personajes;
var Partidas = require('./models/schema').partidas;
var info;
app.set('view engine', 'ejs');


app.use(express.static('public'));

//Rutas
app.use("/", rutas);

io.on("connection", function(socket){
	socket.on("datos", function(nombre, clase){
		info = new Partidas({usuario: nombre, clase: clase, puntuacion: 0});
		console.log(info);
		socket.emit("DataUser", info);
	});

	
});

//app.listen(8080);
server.listen(8080, function(){
	console.log('Servidor corriendo en el puerto: 8080');
});
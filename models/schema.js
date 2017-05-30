var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

mongoose.connect('mongodb://localhost/db_rpg');

var personajesSchema = {nombre:String, clase:String , img:String, atk:Number, def:Number, hp:Number, lvl_min:Number, lvl_max:Number};
var personajes_Schema = new Schema(personajesSchema);
var Personajes = mongoose.model("Personajes", personajes_Schema);

module.exports.personajes = Personajes;

var partidaSchema = {usuario:String, clase:String, puntuacion:Number};
var partida_Schema = new Schema(partidaSchema);
var Partidas = mongoose.model("Partidas", partida_Schema);

module.exports.partidas = Partidas;
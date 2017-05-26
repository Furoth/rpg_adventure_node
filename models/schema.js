var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

mongoose.connect('mongodb://localhost/db_rpg');

var personajesSchema = {nombre:String, img:String, atk:Number, def: Number, hp: Number, lvl:Number, exp_min:Number, exp_max:Number};
var personajes_Schema = new Schema(personajesSchema);
var Personajes = mongoose.model("Personajes", personajes_Schema);

module.exports.personajes = Personajes;
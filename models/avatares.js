var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

mongoose.connect('mongodb://localhost/db_rpg');

var personajesSchema = {nombre:String, clase:String , img:String, atk:Number, def: Number, hp: Number, lvl_min:Number, lvl_max:Number};
var personajes_Schema = new Schema(personajesSchema);
var Personajes = mongoose.model("Personajes", personajes_Schema);


//Entradas de Guerrero
var nuevo = new Personajes({nombre:"war_1", clase:"Guerrero", img: "/img/characters/guerrero/war_1/estatico/avatar.png", atk:6, def:9, hp:8, lvl_min:0, lvl_max:3});
nuevo.save(function(err){ console.log(err); });
var nuevo = new Personajes({nombre:"war_2", clase:"Guerrero", img: "/img/characters/guerrero/war_2/estatico/avatar.png", atk:10, def:13, hp:12, lvl_min:3, lvl_max:6});
nuevo.save(function(err){ console.log(err); });
var nuevo = new Personajes({nombre:"war_3", clase:"Guerrero", img: "/img/characters/guerrero/war_3/estatico/avatar.png", atk:14, def:17, hp:16, lvl_min:6, lvl_max:10});
nuevo.save(function(err){ console.log(err); });

//Entradas de Arquero
var nuevo = new Personajes({nombre:"arc_1", clase:"Arquero", img: "/img/characters/arquero/arc_1/estatico/avatar.png", atk:7, def:7, hp:5, lvl_min:0, lvl_max:3});
nuevo.save(function(err){ console.log(err); });
var nuevo = new Personajes({nombre:"arc_2", clase:"Arquero", img: "/img/characters/arquero/arc_2/estatico/avatar.png", atk:11, def:11, hp:9, lvl_min:3, lvl_max:6});
nuevo.save(function(err){ console.log(err); });
var nuevo = new Personajes({nombre:"arc_3", clase:"Arquero", img: "/img/characters/arquero/arc_3/estatico/avatar.png", atk:15, def:15, hp:13, lvl_min:6, lvl_max:10});
nuevo.save(function(err){ console.log(err); });

//Entradas de Mago
var nuevo = new Personajes({nombre:"mag_1",clase:"Mago", img: "/img/characters/mago/mag_1/estatico/avatar.png", atk:9, def:5, hp:6, lvl_min:0, lvl_max:3});
nuevo.save(function(err){ console.log(err); });
var nuevo = new Personajes({nombre:"mag_2",clase:"Mago", img: "/img/characters/mago/mag_2/estatico/avatar.png", atk:13, def:9, hp:10, lvl_min:3, lvl_max:6});
nuevo.save(function(err){ console.log(err); });
var nuevo = new Personajes({nombre:"mag_3",clase:"Mago", img: "/img/characters/mago/mag_3/estatico/avatar.png", atk:17, def:13, hp:14, lvl_min:6, lvl_max:10});
nuevo.save(function(err){ console.log(err); });

var enemigosSchema = {nombre:String, clase:String , img:String, atk:Number, def: Number, hp: Number};
var enemigos_Schema = new Schema(enemigosSchema);
var Enemigos = mongoose.model("Enemigos", enemigos_Schema);

var nuevo = new Enemigos({nombre:"Goblin",clase:"Normal", img: "/img/characters/enemigos/normal/goblin.png", atk:6, def:5, hp:6});
nuevo.save(function(err){ console.log(err); });
var nuevo = new Enemigos({nombre:"Ogro",clase:"Jefe", img: "/img/characters/enemigos/boss/ogro.png", atk:16, def:19, hp:20});
nuevo.save(function(err){ console.log(err); });
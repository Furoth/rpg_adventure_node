var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var Personajes = require('../models/schema').personajes;
router.use(bodyparser.urlencoded({ extended: false }));
 
// parse application/json 
router.use(bodyparser.json());

router.get("/", function(req, res){
	//res.render("pages/index");
	res.render("pages/seleccion");
});

router.post('/index',(req,res)=>{
	var info = req.body;
	Personajes.find({nombre: req.body.clase},function(err,pj){
		res.render('pages/index', {
			info: info,
			url: pj[0].img
		});
	});
	
})

module.exports = router;
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var Personajes = require('../models/schema').personajes;
router.use(bodyparser.urlencoded({ extended: false }));
 
router.use(bodyparser.json());

router.get("/", function(req, res){
	res.render("pages/seleccion");
});

router.post('/index',(req,res)=>{
	var info = req.body;
	Personajes.findOne({nombre: req.body.clase},function(err,pj){
		res.render('pages/index', {
			info: info,
			pj: pj
		});
	});
});

router.get("/lucha", function(req, res){
	res.render("pages/lucha");
});

module.exports = router;
var draw = SVG('tablero')

draw.attr({id: 'prueba'})

var group_casillas = draw.group()

var cas_obj = [];

/*var xval = '100';
var yval = '200';
var cas_width = 60;
var cas_height = 80;

for (var i = 0; i < 26; i++) {
	cas = new casillas_obj(xval,yval,cas_width,cas_height, 'cas_obj'+i);
	cas_obj.push(cas);
	xval = parseInt(xval) + 100;
	xval = xval.toString();

}*/

var casillas_class = [];
var flecha;
//Esquema tablero
var cas0 = new casillas_obj(100,200,60,80, 'cas0', 'img/casillas/inicio.svg', 1);
cas0.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(160,210).rotate(-90);

var cas1 = new casillas_obj(200,200,60,80, 'cas1', 'img/casillas/vacia.svg', 2);
cas1.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(260,210).rotate(-90);


var cas2 = new casillas_obj(300,200,60,80, 'cas2', 'img/casillas/lucha.svg', 3);
cas2.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(360,210).rotate(-90);


var cas3 = new casillas_selec(400,200,60,80, 'cas3', 'img/casillas/vacia.svg', 4, 16);
cas3.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(410,160).rotate(-180);
flecha = draw.image('img/casillas/arrow.svg',40,60).move(410,260);

var cas4 = new casillas_obj(400,100,60,80, 'cas4', 'img/casillas/lucha.svg', 5);
cas4.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(460,110).rotate(-90);

var cas5 = new casillas_obj(500,100,60,80, 'cas5', 'img/casillas/lucha.svg', 6);
cas5.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(560,110).rotate(-90);

var cas6 = new casillas_selec(600,100,60,80, 'cas6', 'img/casillas/vacia.svg', 7, 13);
cas6.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(610,60).rotate(-180);
flecha = draw.image('img/casillas/arrow.svg',40,60).move(610,160);

var cas7 = new casillas_obj(600,0,60,80, 'cas7', 'img/casillas/bonus.svg', 8);
cas7.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(660,10).rotate(-90);

var cas8 = new casillas_obj(700,0,60,80, 'cas8', 'img/casillas/vacia.svg', 9);
cas8.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(760,10).rotate(-90);

var cas9 = new casillas_obj(800,0,60,80, 'cas9', 'img/casillas/bonus.svg', 10);
cas9.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(810,60);

var cas10 = new casillas_obj(800,100,60,80, 'cas10', 'img/casillas/lucha.svg', 11);
cas10.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(860,110).rotate(-90);

var cas11 = new casillas_obj(900,100,60,80, 'cas11', 'img/casillas/bonus.svg', 12);
cas11.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(960,110).rotate(-90);

var cas12 = new casillas_obj(1000,100,60,80, 'cas12', 'img/casillas/vacia.svg', 26);
cas12.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(1010,160);

var cas13 = new casillas_obj(600,200,60,80, 'cas13', 'img/casillas/vacia.svg', 14);
cas13.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(660,210).rotate(-90);

var cas14 = new casillas_obj(700,200,60,80, 'cas14', 'img/casillas/lucha.svg', 15);
cas14.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(760,210).rotate(-90);

var cas15 = new casillas_obj(800,200,60,80, 'cas15', 'img/casillas/lucha.svg', 10);
cas15.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(810,160).rotate(-180);

var cas16 = new casillas_obj(400,300,60,80, 'cas16', 'img/casillas/vacia.svg', 17);
cas16.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(460,310).rotate(-90);

var cas17 = new casillas_obj(500,300,60,80, 'cas17', 'img/casillas/bonus.svg', 18);
cas17.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(560,310).rotate(-90);

var cas18 = new casillas_selec(600,300,60,80, 'cas18', 'img/casillas/vacia.svg',13, 19);
cas18.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(610,260).rotate(-180);
flecha = draw.image('img/casillas/arrow.svg',40,60).move(610,360);

var cas19 = new casillas_obj(600,400,60,80, 'cas19', 'img/casillas/vacia.svg', 20);
cas19.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(660,410).rotate(-90);

var cas20 = new casillas_obj(700,400,60,80, 'cas20', 'img/casillas/bonus.svg', 21);
cas20.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(760,410).rotate(-90);

var cas21 = new casillas_obj(800,400,60,80, 'cas21', 'img/casillas/lucha.svg', 22);
cas21.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(860,410).rotate(-90);

var cas22 = new casillas_obj(900,400,60,80, 'cas22', 'img/casillas/vacia.svg', 23);
cas22.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(960,410).rotate(-90);

var cas23 = new casillas_obj(1000,400,60,80, 'cas23', 'img/casillas/bonus.svg', 24);
cas23.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(1060,410).rotate(-90);

var cas24 = new casillas_obj(1100,400,60,80, 'cas24', 'img/casillas/lucha.svg', 25);
cas24.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(1110,360).rotate(-180);

var cas25 = new casillas_obj(1100,300,60,80, 'cas25', 'img/casillas/vacia.svg', 27);
cas25.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(1110,260).rotate(-180);

var cas26 = new casillas_obj(1000,200,60,80, 'cas26', 'img/casillas/bonus.svg', 27);
cas26.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(1060,210).rotate(-90);

var cas27 = new casillas_obj(1100,200,60,80, 'cas27', 'img/casillas/jefe.svg', 28);
cas27.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(1160,210).rotate(-90);

var cas28 = new casillas_obj(1200,200,60,80, 'cas28', 'img/casillas/inicio.svg', 28);
cas28.draw();

var arr_casillas = [];
arr_casillas.push(cas0,cas1,cas2,cas3,cas4,cas5,cas6,cas7,cas8,cas9,cas10,cas11,cas12,cas13,cas14,cas15,cas16,cas17,cas18,cas19,cas20,cas21,cas22,cas23,cas24,cas25,cas26,cas27,cas28);


/*var casillas_class = [];
casillas_class.push(casillas.image('img/casillas/inicio.svg',60 ,80).attr({id: 'cas0'}));

var xval = '100';
for (var i = 1 ; i <= 10; i++) {
	casillas_class.push(casillas.image('img/casillas/'+add[Math.floor(Math.random()*3)]+'.svg',60 ,80));
	casillas_class[i].attr({
		x:xval,
		id: 'cas'+i
	});
	xval = parseInt(xval) + 100;
	xval = xval.toString();
}
casillas_class.push(casillas.image('img/casillas/jefe.svg',60 ,80).attr({
	x: xval, 
	id: 'cas'+i
}))
xval = parseInt(xval) + 100;
xval = xval.toString();
i++
casillas_class.push(casillas.image('img/casillas/inicio.svg',60 ,80).attr({
	x: xval, 
	id: 'cas'+i
}))

for (var i = casillas_class.length - 1; i >= 0; i--) {
	casillas_class[i].addClass('inactiva')
}

casillas.move(100, 425)		
*/	
var ava;
ava = new avatar(110, 160);




/*Viewbox*/
var view = draw.viewbox(ava.x, ava.y-250, 550, 500);
view.zoom;
$("#zoom").change(function(){
	view.viewbox(ava.x-200, ava.y-300, $(this).val(), $(this).val());
})
/*Desactivar introducción manual del Viewbox*/
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});
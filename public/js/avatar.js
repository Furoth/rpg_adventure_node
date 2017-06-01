class avatar{

	constructor(pos_x, pos_y,url_ava){
		this.x = pos_x;
		this.y = pos_y;
		this.pj = draw.image(url_ava).attr({ 
			x: this.x,
			y: this.y,
			id: 'avatar'
		});	
		this.casilla = 0;
		this.cash = 0;	
	}

	move(x){

		for(var i=0; i<x; i++){
			if(this.x < 1200){
				if(this.casilla == 3 || this.casilla == 6 || this.casilla == 9 || this.casilla == 12 || this.casilla == 15 || this.casilla == 18 || this.casilla == 24 || this.casilla == 25){
				if(this.casilla == 3){
					//$("#flecha3up").attr({filter: "brightness(200%)"});
					var dire = prompt("Up or down");
					if(dire == "up"){
						this.y = this.y-100;
						this.casilla = 4;
					} else if(dire == "down"){
						this.y = this.y+100;
						this.casilla = 16;
					} else {
						alert("Al no escoger direccion iras arriba por defecto");
						this.y = this.y-100;
						this.casilla = 4;
					}
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
				} else if(this.casilla == 6){
					var dire = prompt("Up or down");
					if(dire == "up"){
						this.y = this.y-100;
						this.casilla = 7;
					} else if(dire == "down"){
						this.y = this.y+100;
						this.casilla = 13;
					} else {
						alert("Al no escoger direccion iras arriba por defecto");
						this.y = this.y-100;
						this.casilla = 7;
					}
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
				} else if(this.casilla == 18){
					var dire = prompt("Up or down");
					if(dire == "up"){
						this.y = this.y-100;
						this.casilla = 13;
					} else if(dire == "down"){
						this.y = this.y+100;
						this.casilla = 19;
					} else {
						alert("Al no escoger direccion iras arriba por defecto");
						this.y = this.y-100;
						this.casilla = 13;
					}
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
				} else if(this.casilla == 9){
					this.y = this.y+100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla++;
				} else if(this.casilla == 12){
					this.y = this.y+100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla = 26;
				} else if(this.casilla == 15){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
						if(this.x > view_auto){
							let viewbox = $('#prueba').attr('viewBox').split(" ");
							let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
							$('#prueba').attr({
								viewBox : new_view
							});
						}
					this.casilla = 10;
				} else if(this.casilla == 24){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla++;
				} else if(this.casilla == 25){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla = 27;
				} 
			}else{
				this.x = this.x + 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.casilla++;
			}
		}
	}
	}

	lucha(){
		var lucha = window.open("lucha","_blank","toolbar=no,resizable=no,top=200,left=500,width=800,height=556");
	}

	bonus(){
		var dineros = [75,100,125,150,175,200];
		var random = Math.floor(Math.random()*5);
		this.cash = this.cash+dineros[random];
		$("#h2cash").html(this.cash);
	}

	lucha_boss(){
		alert("Lucha boss");
	}

	fin(){
		alert("Partida finalizada");
	}

	getCasilla(){
		return this.casilla;
	}
}
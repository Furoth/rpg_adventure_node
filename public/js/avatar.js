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
		this.lvl = 0;
	}

	move(x){

		for(var i=0; i<x; i++){
			if(this.x < 1200){
				if(this.casilla == 3 || this.casilla == 6 || this.casilla == 9 || this.casilla == 12 || this.casilla == 15 || this.casilla == 18 || this.casilla == 24 || this.casilla == 25){
				if(this.casilla == 3){
					var dire = prompt("Arriba o abajo");
					if(dire == "arriba" || dire == "Arriba"){
						this.y = this.y-100;
						this.casilla = 4;
					} else if(dire == "abajo" || dire == "Abajo"){
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
					var dire = prompt("Arriba o abajo");
					if(dire == "arriba" || dire == "Arriba"){
						this.y = this.y-100;
						this.casilla = 7;
					} else if(dire == "abajo" || dire == "Abajo"){
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
					var dire = prompt("Arriba o abajo");
					if(dire == "arriba" || dire == "Arriba"){
						this.y = this.y-100;
						this.casilla = 13;
					} else if(dire == "abajo" || dire == "Abajo"){
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
		alert('Para derrotar al enemigo necesitas sacar entre 0 y 4');
		var random = Math.floor(Math.random()*5);
		if(random == 0 || random == 1 || random == 2 || random == 3 || random == 4){
			this.lvl = this.lvl + 1;
			$("#h2lvl").html(this.lvl);
			alert('Has ganado con un ' + random);
		} else {
			alert('Has perdido con un ' + random);
			window.location.replace('lucha');
		}
		
	}

	bonus(){
		var dineros = [75,100,125,150,175,200];
		var random = Math.floor(Math.random()*5);
		this.cash = this.cash+dineros[random];
		$("#h2cash").html(this.cash);
	}

	lucha_boss(){
		alert('Para derrotar al jefe necesitas sacar entre 0 y 2');
		var random = Math.floor(Math.random()*10);
		if(random == 0 || random == 1 || random == 2){
			this.lvl = this.lvl + 5;
			$("#h2lvl").html(this.lvl);
			alert('Has ganado con un ' + random);
		} else {
			alert('Has perdido con un ' + random);
			window.location.replace('lucha');
		}
	}

	fin(){
		alert("Partida finalizada");
		window.location.replace('lucha');
	}

	getCasilla(){
		return this.casilla;
	}
}
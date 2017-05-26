class avatar{

	constructor(pos_x, pos_y){
		this.x = pos_x;
		this.y = pos_y;
		this.pj = draw.image('/img/characters/guerrero/war_1/estatico/avatar.png').attr({ 
			x: this.x,
			y: this.y,
			id: 'avatar'
		});	
		this.casilla = 0;	
	}

	move(x){
		if(this.casilla + x > 3 && this.casilla <= 3){
			var resto = 3 - this.casilla;
			var dire = prompt('Up or down');
			this.x = this.x + 100*resto;
			this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			if(dire == 'up'){
				var resto_2 = this.casilla + x - 4;
				this.y -= 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.casilla = this.casilla + x;
			} else if (dire == 'down'){
				var resto_2 = this.casilla + x - 4;
				this.y += 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.casilla = this.casilla + x + 12;
			} else {
				alert('Al no escoger seguiras el camino de arriba por defecto');
				var resto_2 = this.casilla + x - 4;
				this.y -= 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.casilla = this.casilla + x;
			}
			if(this.casilla > 6){
				this.x = this.x + 100*2;
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
				dire = 'up';
				if(dire == 'up'){
					this.y -= 100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				} else if (dire == 'down'){
					this.y += 100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					this.casilla = this.casilla + x + 12;
				}
				this.x = this.x + 100 * (this.casilla - 7);
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});	
			} else {
				this.x = this.x + 100*resto_2;
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});	
			}
			
		}else if (this.casilla == 4 && x <= 2) {
			this.x = this.x + 100*x;
			this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			this.casilla = this.casilla + x;
		}else if(this.casilla + x >= 6 && this.casilla <= 6){
			var resto = 6 - this.casilla;
			dire = 'up';
			this.x = this.x + 100*resto;
			this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			if(dire == 'up'){
				var resto_2 = this.casilla + x - 7;
				this.y -= 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.casilla = this.casilla + x;
			} else if (dire == 'down'){
				var resto_2 = this.casilla + x - 7;
				this.y += 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.casilla = this.casilla + x + 6;
			} else {
				alert('Al no escoger seguiras el camino de arriba por defecto');
				var resto_2 = this.casilla + x - 7;
				this.y -= 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.casilla = this.casilla + x;
			}
			if(this.casilla > 9){
				this.x = this.x + 100*2;
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
				this.y += 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				this.x = this.x + 100* (this.casilla - 10);
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});	
			} else {
				this.x = this.x + 100*resto_2;
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});	
			}
		}else if(this.casilla == 7 && x <= 2){
			this.x = this.x + 100*x;
			this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			this.casilla = this.casilla + x;
		}else if(this.casilla + x >= 9 && this.casilla <= 9){
			var resto = 9 - this.casilla;
			this.x = this.x + 100*resto;
			this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			this.y += 100;
			this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			if(this.casilla + x > 10){
				if(this.casilla == 7 && x >= 4){
					var resto_2 =  x - 3;
					var resto_3 = x - resto_2;
				}else if(this.casilla == 8 && x >= 3){
					var resto_2 = x - 2;
					var resto_3 = x - resto_2;
				}else if(this.casilla == 9 && x >= 2){
					var resto_2 = x - 1;
					var resto_3 = x - resto_2;
				}
			}
			if(resto_2 <= 2){
				this.x = this.x + 100*resto_2;
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});	
			} else if(resto_2 ) {
				this.x = this.x + 100*2;
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			}
			console.log(resto_3);
			if(resto_3 > 0){
				this.y += 100;
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
				this.x = this.x + 100*(resto_3 - 1);
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			}
		} else if(this.casilla == 10 && x <= 2){
			this.x = this.x + 100*x;
			this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()});
			this.casilla = this.casilla + x;
		} else {

			if(this.x < 1200){
				var result = this.x + x*100;
			
				this.x = result;
				if(result >1200){
					this.x = 1200;	

					setTimeout(function() { alert("Partida finalizada");}, 1600);	
				}
				//this.pj.animate(1500).move(this.x+100, this.y).loop(x)
				this.pj.animate(1500).attr({x : this.x.toString(), y: this.y.toString()})			

				var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
				if(this.x > view_auto){
					let viewbox = $('#prueba').attr('viewBox').split(" ");
					let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
					$('#prueba').attr({
						viewBox : new_view
					});
				}
			}
			this.casilla = this.casilla + x;
		}
	}
}
class avatar{
	/*constructor(pos_x, pos_y){
		this.x = pos_x;
		this.y = pos_y;
		this.pj = draw.rect(20, 20).attr({ 
			fill: '#f06',
			x: this.x,
			y: this.y,
			id:'avatar'
		});		
	}*/

	constructor(pos_x, pos_y){
		this.x = pos_x;
		this.y = pos_y;
		this.pj = draw.image('/img/characters/guerrero/war_1/estatico/avatar.png').attr({ 
			x: this.x,
			y: this.y,
			id: 'avatar'
		});		
	}

	move(x){
		if(this.x < 1200){
			var result = this.x + x*100;
			
			this.x = result;
			if(result >1200){
				this.x = 1200;	

				setTimeout(function() { alert("Partida finalizada");}, 1600);
				this.pj = draw.load('/img/characters/guerrero/war_1/estatico/avatar.png').attr({ 
					x: this.x,
					y: this.y,
					id: 'avatar'
				});		
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
	}
}


class dadico {
  constructor(num_i) {
    $(".wrap").append("<div id='dice_mask'></div>");
  	this.i = num_i;
  }


  random(){
  	
    $('#dice').animate({left: '+2px'}, 100,function(){
			$('#dice').addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			var sound = new Audio("sounds/dice.wav");
			sound.play();
			$('#dice').removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			$('#dice').removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
		      var random = Math.floor(Math.random()*6+1);
		      this.num = random;

		    $('#dice').removeClass();
		    $('#dice').addClass("dice");
			$('#dice').addClass("dice_"+this.num);
			$("#result").html("Numero de movimientos: <span>"+this.num+"</span>");
			$('#dice').css('cursor','pointer');
			$("#dice_mask").remove();//remove mask
			if(this.num){
				/*for(var i = 1; i <= i+this.num; i++ )
				{
					if(arr_casillas[i].seleccion == true){
						var dire = prompt("arriba o abajo");
						if (dire == "up") {
							i = arr_casillas[i].next_up;
						}
						if (dire == "down") {
							i = arr_casillas[i].next_down;
						}
					}
					ava.move();
					this.num = this.num-1;	
				}*/
				/*while(this.num>0){
					if(arr_casillas[this.i].seleccion == true){
						var dire = prompt("arriba o abajo");
						if (dire == "up") {
							ava.update(arr_casillas[this.i].x,arr_casillas[this.i].y);
							this.i = arr_casillas[this.i].up;
							
							//ava.move();
						}
						if (dire == "down") {
							//console.log(arr_casillas[i]);
							ava.update(arr_casillas[this.i].x,arr_casillas[this.i].y);
							this.i = arr_casillas[this.i].down;
							
							//ava.move();
						}
					} else {
						console.log(arr_casillas[this.i].id	+'rect');
						ava.update(arr_casillas[this.i].x,arr_casillas[this.i].y);
						this.i = arr_casillas[this.i].next;
						
					}
					console.log(this.num);
					
					this.num--;
					this.i++;
				}*/
				ava.move(this.num);
			}
			
		});
  	}
}

$('#dice').click(function(){
	var dice = new dadico(0);
	dice.random();
});
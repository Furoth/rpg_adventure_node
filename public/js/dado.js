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
				
				ava.move(this.num);
				var evento = ava.getCasilla();
				if(evento == 2 || evento == 4 || evento == 5 || evento == 10 || evento == 14 || evento == 15 || evento == 21 || evento == 24){
					ava.lucha();	
				} else if(evento == 7 || evento == 9 || evento == 11 || evento == 17 || evento == 20 || evento == 23 || evento == 26){
					ava.bonus();
				} else if (evento == 27){
					ava.lucha_boss();
				}
				
			}
			
		});
  	}
}

$('#dice').click(function(){
	var dice = new dadico(0);
	dice.random();
});
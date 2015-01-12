$(document).ready(function($) {
  	
	$('#main-window *').css('display', 'none');
	$('#main-window *').fadeIn(500);

	$('.practicebutton').mouseenter(function(){

		var gameName = $(this).html()
			switch (gameName){
				case "1 minute hero":
				var description = "race to try and beat your high score in 60 seconds!"
				break;
				case "survival":
				var description = "stay alive for as long as posible as the game gets faster!!"
				break;
				case "streaker":
				var description = "take it slow and see how many you can get in a row!"
				break;
				case "adventure":
				var description = "fight level up and increase your verb might!"
				break;
				default:
				return "error"
				break;
			}
		$("#game-explanation p").html(description);
		$("#game-explanation").css("opacity",1)

		$(".practicebutton").mouseleave(function(event) {
			$("#game-explanation").css("opacity",0)

		});

	});


});
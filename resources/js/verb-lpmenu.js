$(document).ready(function($) {
  	
	$('#main-window *').css('display', 'none');
	$('#main-window *').fadeIn(500);

	$('.practicebutton').mouseenter(function(){
		$(this).css("background-color","#2FAA8F")
		$(this).css("margin-left", "-30px")
		$(this).css("width", "405px")

		$("#conjugation-selectors, #game-explanation").css("opacity",1)

		$("#conjugation-selectors, #game-explanation").mouseover(function(event) {
			$("#conjugation-selectors, #game-explanation").css("opacity",1)

		});
		$("#conjugation-selectors, #game-explanation, .practicebutton").mouseleave(function(event) {
			$("#conjugation-selectors, #game-explanation").css("opacity",0)
			$(".practicebutton").css("background-color","#FFAD30")
			$(".practicebutton").css("margin-left", "0px")
			$(".practicebutton").css("width", "345px")
		});

	});


});
$(document).ready(function($) {
  	
	$('#main-window *').css('display', 'none');
	$('#main-window *').fadeIn(500);

    $("#sidebar-trigger-area").mouseenter(function(event) {
        $("#sidebar").animate({left: "-=300"},500)
    });    
        $("#sidebar").mouseleave(function(event) {
        $("#sidebar").animate({left: "+=300"},500)
    }); 

});
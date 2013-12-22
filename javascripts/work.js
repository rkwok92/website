$(document).ready(function() {
		$('h2').each(function(i) {
			var position = $(this).parent().position();
			position.top -= 100;
			console.log(position.top);
			console.log('min: ' + (position.top - 0.5) + ' / max: ' + parseInt(position.top + $(this).parent().height()));
			$(this).parent().scrollspy({
				min: position.top-0.5,
				max: position.top + $(this).parent().height() - 0.5,
				onEnter: function(element, position) {
					var temp = "#"+element.id
					console.log('entering ' +  element.id);
					console.log(position.top);
					var navoffsetposition = $('#worknav a[href="'+temp+'"]').position().top-1;
					$('#horizontal-bar').css("top", navoffsetposition);
				},
				onLeave: function(element, position) {
					if(console) console.log('leaving ' +  element.id);
				}
			});
		});
		
	
  // var navoffsetposition = $clicked.parent().position().top;
  // $('#horizontal-bar').css("top",navoffsetposition)
  // event.preventDefault();
	// var currenttop = $('html, body').offset().top;
	// console.log(currenttop);
	
	$(function(){
		 $("#work").css("color", "#F8A71A");
		 $("#work").css("border-bottom", "solid #F8A71A");
		 $("#work").css("border-bottom-width", "2.5px");
		 $("#worknav a").css("font-weight", "bolder").css("opacity","0.7");
	 	 $("#worknav div").css("opacity","0.5");
 		 $('.leftcontainer').hide();
		 $('.rightcontainer').hide();
 		 $('.leftcontainer').delay(100).fadeIn(250);
		 $('.rightcontainer').delay(400).fadeIn(1000);
 	});

	
 $("#play").hover(function(){
	 $("#play").css("color", "#F8A71A");
 }, function(){
	 $("#play").css("color", "#FFFFFF");
 });
 $("#contact").hover(function(){
	 $("#contact").css("color", "#F8A71A");
 }, function(){
	 $("#contact").css("color", "#FFFFFF");
 });
});
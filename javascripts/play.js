
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
				var navoffsetposition = $('#playnav a[href="'+temp+'"]').position().top-1;
				$('#horizontal-bar').css("top", navoffsetposition);
			},
			onLeave: function(element, position) {
				if(console) console.log('leaving ' +  element.id);
			}
		});
	});
	
	SC.initialize({
	  client_id: '12f8730fd2575ca394170db161b2e8d6'
	});

	$(document).ready(function() {
	    SC.oEmbed("http://soundcloud.com/kwkstr", {color: "F8A71A", maxheight: "350"}, 
				document.getElementById('player'));
	});	
	
	 $("#play").css("color", "#F8A71A");
	 $("#play").css("border-bottom", "solid #F8A71A");
	 $("#play").css("border-bottom-width", "2.5px");
	 $("#playnav a").css("font-weight", "bolder").css("opacity","0.7");
	 $("#playnav div").css("opacity","0.5");
	 $('.leftcontainer').hide();
	 $('.rightcontainer').hide();
	 $('.leftcontainer').delay(100).fadeIn(250);
	 $('.rightcontainer').delay(400).fadeIn(1000);
	 
	 
	 $("#work").hover(function(){
		 $("#work").css("color", "#F8A71A");
	 }, function(){
		 $("#work").css("color", "#FFFFFF");
	 });
	 $("#contact").hover(function(){
		 $("#contact").css("color", "#F8A71A");
	 }, function(){
		 $("#contact").css("color", "#FFFFFF");
	 });
});
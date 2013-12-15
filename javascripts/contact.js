$(document).ready(function() {
 $("#contact").css("color", "#F8A71A");
 $("#contact").css("border-bottom", "solid #F8A71A");
 $("#contact").css("border-bottom-width", "2.5px");
 $('#random').hide();
 $('#letstalk').hide();
 $('#icons').hide();
 $('#last').hide();
 $('#random').fadeIn(600);
 $('#letstalk').fadeIn(600);
 $('#icons').delay(400).fadeIn(1000);	
 $('#last').delay(1500).fadeIn(1000);
 
 $("#work").hover(function(){
	 $("#work").css("color", "#F8A71A");
 }, function(){
	 $("#work").css("color", "#FFFFFF");
 });
 $("#play").hover(function(){
	 $("#play").css("color", "#F8A71A");
 }, function(){
	 $("#play").css("color", "#FFFFFF");
 });
 
	var array = ["I agree", "Sounds good", "Took you long enough", "You're smart", 
	"I like that confidence", "Great idea", "I like your style", "I like your style", "I like your style", 
	"Word", "Never thought you'd ask", "About time", "Dope", "Thank you, sir", "You're the man", 
	"Life is short", "I hear ya", "Why didn't we do this earlier.."];
	var number = Math.ceil(Math.random()*array.length-1);
	$("#random").html(array[number]);
		 
	$("#icons area").hover(function(){
		var media = $(this).attr('rel');
		$(this).parent().prev().attr("src","images/"+media+"c.png");
		}, function(){
		var media = $(this).attr('rel');
		$(this).parent().prev().attr("src","images/"+media+".png");	
	});
});
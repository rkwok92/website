$(function(){
	
	$('#mainpage').hide();
	$('#mainpage').delay(500).fadeIn(1200);
	 
	 var array = ["still remodeling the kitchen", "terrible breakout - you don't want to see me", "still rearranging the furniture", 
		 "still redoing the lights", "running low on sleep", "still getting dressed", "rain check",
		 "doorman's taking a couple days off", "still waiting on the guys from legal and risk", "working on my jumpshot right now"];
	 var number = Math.ceil(Math.random()*array.length-1);
	 $("#random").html(array[number]);
	 
});



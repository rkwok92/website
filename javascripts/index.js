$(function(){
	
	$('#mainpage').hide();
	$('#mainpage').delay(500).fadeIn(1200);
	 
	 var array = ["still remodeling the kitchen", "terrible breakout - you don't want to see me", "still rearranging the furniture", 
		 "still waiting on the guys from legal and risk", "still redoing the lights", "running low on sleep",
		 "doorman's on leave", "still waiting on the guys from legal and risk", "working on my jumpshot right now",
		 "still renovating the place"];
	 var number = Math.ceil(Math.random()*array.length-1);
	 $("#random").html(array[number]);
	 
});



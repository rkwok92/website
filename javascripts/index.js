$(function(){
	
	$('#mainpage').hide();
	$('#mainpage').delay(500).fadeIn(1200);
	 
	 var array = ["remodeling the kitchen right now", "terrible breakout right now", "rearranging some furniture right now", 
		 "redoing the lights right now", "adding some decor right now", "running low on sleep right now", 
		 "doing some renovation right now", "fixing the walls right now", "remaking a floorplan right now", 
		 "door needs repairs right now", "still waiting on the guys from legal and risk", "working on my jumpshot right now"];
	 var number = Math.ceil(Math.random()*array.length-1);
	 $("#random").html(array[number]);
	 
});



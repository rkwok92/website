$(window).load(function() {
	$(document).ready(function() {
	$(function(){
		$('#header_container').hide();
		$('#mainpage').hide();
		$('#header_container').fadeIn(800);
		$('#mainpage').delay(500).fadeIn(1200);
	});

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
	$("#contact").hover(function(){
	 $("#contact").css("color", "#F8A71A");
	}, function(){
	 $("#contact").css("color", "#FFFFFF");
	});

 //localstorage on pagevisits
 function pageVisit()
 {
	 console.log(localStorage.visitCount);
   if (localStorage.visitCount){
     localStorage.visitCount=Number(localStorage.visitCount)+1;
     }
   else{
     localStorage.visitCount=1;
     }
   if (localStorage.visitCount>50){
     $("#visitNumber").html("you've stumbled onto my site " + localStorage.visitCount + " times now. . .   I'm filing a restraining order.");
     }
   else if (localStorage.visitCount>20){
     $("#visitNumber").html("you've stumbled onto my site " + localStorage.visitCount + " times now. . .   are you stalking me?");
     }
   else if (localStorage.visitCount>5){
     $("#visitNumber").html("you've stumbled onto my site " + localStorage.visitCount + " times now. I'm flattered! ");
     }
	 else if (localStorage.visitCount>1){
	 	 $("#visitNumber").html("you've stumbled onto my site " + localStorage.visitCount + " times now. Thought you'd like to know.");
	   }
   else{
     $("#visitNumber").html("I noticed you've never visited my site before, thanks for dropping by!");
     }
  };
	window.onload = pageVisit;

});
});
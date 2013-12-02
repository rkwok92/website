$(function(){
	//logo
   $("#rklogo").mouseenter(function() {
         $(this).effect("bounce", { times:6 , distance:10}, 1000);
   });
	 
	 //changing picture
   $("#1").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile9.jpg')");
   });
   $("#2").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile8.jpg')");
   });
   $("#3").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile7.jpg')");
   });
   $("#4").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile6.jpg')");
   });
   $("#5").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile5.jpg')");
   });
   $("#6").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile4.jpg')");
   });
   $("#7").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile3.jpg')");
   });
   $("#8").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile2.jpg')");
   });
   $("#9").mouseenter(function() {
         $("#mainpage").css("background-image", "url('images/profile1.jpg')");
   });
	 
	 //Links
	 $("#work").click(function(){
	   window.location = "work.html";
	 });
	 $("#play").click(function(){
	   window.location = "play.html";
	 });
	 $("#contact").click(function(){
	   window.location = "contact.html";
	 });
	 
	 //Bedtime
	 $("#dim").hover(function(){
		 $("#dim").css("color", "#F8A71A");
	 }, function(){
		 $("#dim").css("color", "#FFFFFF");
	 });
	 $("#dim").click(function(){
		 window.location = "http://www.reddit.com";
	 });
	 
	 //worknav
	 $('#worknav li a').css("color","inherit");
	 $('#worknav li a').css("text-decoration","none");
	 $("#worknav li").hover(function(){
		 $(this).css("color", "#F8A71A");
	 }, function(){
		 $(this).css("color", "#00294A");
	 });
	 
	 
	 //Animated Scroll function	 
   $('.leftcontainer a').click(function(){
		 var $clicked = $(this)
     var topbody = $('.rightcontainer').find($clicked.attr('href')).offset().top;
		 topbody -= 100;
		 $('html, body').stop().animate({
		 	         scrollTop: topbody
		 	     },1500, 'easeInOutExpo');
		 
		 var navoffsetposition = $clicked.parent().position().top;
		 $('#horizontal-bar').delay(1000).css("top",navoffsetposition)
		 event.preventDefault();
   });
	 
	 // $("body").scroll(function(){
// 		 console.log("asdfasdf");
// 		 var currenttop = $('html, body').offset().top;
// 		 console.log(currenttop);
// 	 });
	 
});
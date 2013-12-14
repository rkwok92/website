$(function(){
		//logo
   $("#rklogo").mouseenter(function() {
         $(this).effect("bounce", { times:6 , distance:10}, 1000);
   });
	 
	 //changing picture
 	function preload(arrayOfImages) {
 	    $(arrayOfImages).each(function(){
 	        $('<img/>')[0].src = this;
 	    });
 	}

 	preload([
 	    'images/profile1.jpg',
 	    'images/profile2.jpg',
 			'images/profile3.jpg',
 			'images/profile4.jpg',
 			'images/profile5.jpg',
 			'images/profile6.jpg',
 			'images/profile7.jpg',
 			'images/profile8.jpg',
 			'images/profile9.jpg'
 	]);
	
   $("#1").mouseenter(function() {
		 		$("#profileImage").attr("src","images/profile9.jpg");
   });
   $("#2").mouseenter(function() {
         $("#profileImage").attr("src","images/profile8.jpg");
   });
   $("#3").mouseenter(function() {
         $("#profileImage").attr("src","images/profile7.jpg");
   });
   $("#4").mouseenter(function() {
        $("#profileImage").attr("src","images/profile6.jpg");
   });
   $("#5").mouseenter(function() {
         $("#profileImage").attr("src","images/profile5.jpg");
   });
   $("#6").mouseenter(function() {
         $("#profileImage").attr("src","images/profile4.jpg");
   });
   $("#7").mouseenter(function() {
         $("#profileImage").attr("src","images/profile3.jpg");
   });
   $("#8").mouseenter(function() {
         $("#profileImage").attr("src","images/profile2.jpg");
   });
   $("#9").mouseenter(function() {
         $("#profileImage").attr("src","images/profile1.jpg");
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
	 // $("#dim").hover(function(){
	 // 		 $("#dim").css("color", "#F8A71A");
	 // }, function(){
	 // 		 $("#dim").css("color", "#FFFFFF");
	 // });
	 // $("#dim").click(function(){
	 // 		 window.location = "http://www.reddit.com";
	 // });
	 
	 //worknav
	 $('#worknav li a').css("color","inherit");
	 $('#worknav li a').css("text-decoration","none");
	 $("#worknav li").hover(function(){
		 $(this).css("color", "#778893");
	 }, function(){
		 $(this).css("color", "#F8A71A;");
	 });
	 
	 //playnav
	 $('#playnav li a').css("color","inherit");
	 $('#playnav li a').css("text-decoration","none");
	 $("#playnav li").hover(function(){
		 $(this).css("color", "#778893");
	 }, function(){
		 $(this).css("color", "#F8A71A");
	 });
	 
	 //rightcontainer
	 $(".rightcontainer div").css("padding-bottom", "20px");
	 
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
	 
	 // //submitMessage function
 // 	 $("#submitMessage").submit(function( event ) {
 // 	   // Stop form from submitting normally
 // 	   		event.preventDefault();
 // 			
 // 	   // Get some values from elements on the page:
 // 		 console.log("it worked");
 // 	   	 var $form = $( this ),
 // 	     name = $form.find( "#name-input" ).val(),
 // 			 contact = $form.find( "#contact-input" ).val(),
 // 			 message = $form.find( "#message-input" ).val(),
 // 	     url = $form.attr( "action");
 // 
 // 	   // Send the data using post
 // 	   var posting = $.post( url, { name: name, contact: contact, message: message } );
 // 
 // 	   // call back (page refreshed from controller)
 // 	   posting.done(function( data ) {
 // 	     return;
 // 	   });
 // 	 });
 	 
	 // $("body").scroll(function(){
// 		 console.log("asdfasdf");
// 		 var currenttop = $('html, body').offset().top;
// 		 console.log(currenttop);
// 	 });
	 
});
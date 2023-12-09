$(document).ready(function() {
	
// $(".anim4").on("mouseover", function () {      ******mous over******
//     //stuff to do on mouseover
//     $(".anim4").effect( "shake" );
// });

     //sticky-nav
var waypoint = new Waypoint({
  element: document.getElementById('restaurant-description'),
  handler: function(direction) {  
    if(direction=="down"){
    	$("nav").attr("id", "sticky-nav");

    } else {
    	$("nav").removeAttr("id");

    }
  },
    offset: 70 
});

     //buttons and nav link click
 $(".button-order").click(function(){
   $("html, body").animate({scrollTop:$("#how-to-order-section").offset().top}, 1000);  
 });

$(".button-more").click(function(){
   $("html, body").animate({scrollTop:$("#restaurant-description").offset().top}, 1000);  
 });

     //s sayta gotovyj kod scc-tricks
 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
       
             //animation

 var waypoint = new Waypoint({
  element: document.getElementById('restaurant-description'),
  handler: function(direction) { 
    $(".anim1").addClass("animated fadeIn");

  },
    offset: 70 
});

 var waypoint = new Waypoint({
  element: document.getElementById('cities-section'),
  handler: function(direction) {  
    $(".anim2").addClass("animated fadeInRight");

  },
    offset: 70 
});

 var waypoint = new Waypoint({
  element: document.getElementById('how-to-order-section'),
  handler: function(direction) {  
    $(".anim3").addClass("animated fadeInUp");

  },
    offset: 70 
});

 var waypoint = new Waypoint({
  element: document.getElementById('header-buttons'),
  handler: function(direction) {  
    if(direction=="up"){
    	$(".anim4").effect("shake");
    } 
  },
    offset: 70 
});

                 // Mobile nav
 $(".mobile-nav-icon").click(function() {

    var icon = $(".mobile-nav-icon i");

    if(icon.hasClass("fa-solid fa-bars")) {
    	icon.removeClass("fa-solid fa-bars");
    	icon.addClass("fa-solid fa-xmark");
    	$("nav").animate({height: "300px"}, 300);
    }else{
    	icon.removeClass("fa-solid fa-xmark");
    	icon.addClass("fa-solid fa-bars");
    	$("nav").animate({height: "70px"}, 300);

    	}

    $("#main-nav").slideToggle(500); 

 });


})



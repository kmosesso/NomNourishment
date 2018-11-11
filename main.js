$( document ).ready(function() {
   $(".menu-button").click(function(){
     $(".menu-button").toggleClass("active");
     $(".menu-nav").slideToggle();
   });
});

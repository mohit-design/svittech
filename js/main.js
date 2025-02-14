$(document).ready(function() {
	// AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
  // On Scroll Up Desktop Header JS
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 5) {
	    $(".bg-desktop-navbar-menu").addClass("active");
	   } else {
	    $(".bg-desktop-navbar-menu").removeClass("active");
	   }
	});
	// Hamburger Menu and Navbar Menu JS
  $(".burger-menu").click(function() {
		$(this).toggleClass("active");
    $("body").toggleClass("active");
    $(".fixed-full-menu-pattern").toggleClass("active");
    $(".navbar-menu").toggleClass("active");
    $(".whatsapp-number").toggleClass("active");
    $(".header-social-media-listing").toggleClass("active");
  });
	$(".fixed-navbar-menu-mobile-close > i").click(function() {
		$("body").removeClass("active");
		$(".fixed-navbar-menu-mobile").removeClass("active");
	});
});
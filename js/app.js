var navMenu, navMenuButton, mobileBreakpoint, hasDropdown;

navMenuButton = $('#navBurger');

navMenu = $('.rn-site-header-nav-menu');

hasDropdown = $('.has-dropdown > a');

navMenuButton.on('click', function(e) {
  navMenuButton.toggleClass('is-active');
  navMenu.slideToggle();
  hasDropdown.on('click', function(e){
    $(this).next('.dropdown').slideToggle();
    e.preventDefault();
  });
  
  e.preventDefault();
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  
  if (scroll >= 100) {
    $('.rn-site-header').addClass('scrolled');
  } else {
    $('.rn-site-header').removeClass('scrolled');
  }
});












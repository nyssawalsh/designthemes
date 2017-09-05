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

$('#scrollDown').click(function(){  
  windowHeight = $(window).height(); 

    $('html, body').animate({
        scrollTop: windowHeight;
        
    }, 1500);
});












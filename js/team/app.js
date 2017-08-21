var navMenu, navMenuButton, mobileBreakpoint, hasDropdown;

navMenuButton = $('#navBurger');

navMenu = $('.site-header nav ul');

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














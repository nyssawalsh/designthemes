var navMenu, navMenuButton, mobileBreakpoint, hasDropdown;

navMenuButton = $('#navBurger');

navMenu = $('.site-header nav ul');

hasDropdown = $('.has-dropdown > a');

navMenuButton.on('click', function(e) {
  navMenuButton.toggleClass('is-active');
  navMenu.slideToggle();
  $('.dropdown').hide();
  hasDropdown.on('click', function(e){
    $(this).next('.dropdown').slideToggle();
    $(this).parent().toggleClass('open');
    e.preventDefault();
  });
  
  e.preventDefault();
});














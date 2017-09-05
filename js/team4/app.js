// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};





var navMenu, navMenuButton, mobileBreakpoint, hasDropdown;

navMenuButton = $('#navBurger');

navMenu = $('.site-header nav ul');

hasDropdown = $('.has-dropdown > a');

navMenuButton.on('click', function(e) {
  navMenuButton.toggleClass('is-active');
  navMenu.slideToggle();
  hasDropdown.on('click', function(e){
    $(this).next('.dropdown').slideToggle();
    $(this).parent().toggleClass('open');
    e.preventDefault();
  });
  
  e.preventDefault();
});






$('.site-featured-listings-slider').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 4,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2
      }
    }  ,
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }  
  ]
});

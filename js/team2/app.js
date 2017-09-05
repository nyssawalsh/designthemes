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


$(window).on('scroll', debounce(function () {
  var scroll = $(window).scrollTop();  
  var header = $('.site-header');
  var headerHeight = $('.site-header').offset().top;
  var win = $(window);
    
  if (scroll >= headerHeight) {
    header.addClass('scrolled');
  } else {
    header.removeClass('scrolled');
  }
  
  if (win.scrollTop() == 0) {
    header.removeClass('scrolled');
  }
  
}, 10));


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

$('#headerSearch').click(function(){  
  $(this).toggleClass('flipped');
  $('.site-header-quick-search form').toggleClass('expanded');

});


$('#scrollDown').click(function(){  
  vpHeight = $('.site-home-page-hero').height(); 

    $('html, body').animate({
        scrollTop: vpHeight
        
    }, 1500);
});

$('.site-home-page-hero-slider').slick({
  dots: true,
  arrows: false
});

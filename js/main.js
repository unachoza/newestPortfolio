jQuery(document).ready(function ($) {
  alert('js is working');
});

jQuery(document).ready(function ($) {
  //open navigation clicking the menu icon
  alert('Hello! I am an alert box!!');
  $('.cd-nav-trigger').on('click', function (event) {
    event.preventDefault();
    toggleNav(true);
  });
  //close the navigation
  $('.cd-close-nav, .cd-overlay').on('click', function (event) {
    event.preventDefault();
    toggleNav(false);
  });

  function toggleNav(bool) {
    $('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
    $('main').toggleClass('scale-down', bool);
  }
  $('.cd-nav li').on('click', function (event) {
    //close navigation
    toggleNav(false);
  });
});

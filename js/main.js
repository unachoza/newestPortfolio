jQuery(document).ready(function ($) {
  //open navigation clicking the menu icon
  $('.cd-nav-trigger').on('click', function (event) {
    console.log('clicked');
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

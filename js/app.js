"use strict";

$(document).ready(function () {

  // Global variables
  var $navBtn = $('.nav-btn');
  var $mainNav = $('.main-nav');
  var $body = $('body');
  var $html = $('html');

  // .nav-btn button click event
  $navBtn.click(function () {
    $(this).toggleClass('open');
    $mainNav.toggleClass('open');
    if ($mainNav.hasClass('open')) {
      $mainNav.slideDown('fast');
    } else {
      $mainNav.slideUp('fast');
    }
  });

  $(".main-nav, .footer-nav").on('click', 'a', function(event){
    event.preventDefault();
    $html.add($body).animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

  // End of 'document.ready' statement.
});

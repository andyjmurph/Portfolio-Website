"use strict";

$(document).ready(function () {

  // Global variables
  var $navBtn = $('.nav-btn');
  var $mainNav = $('.main-nav');

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

  // End of 'document.ready' statement.
});
"use strict";

$(document).ready(function () {

  // Global variables
  var $body = $('body');
  var $html = $('html');
  var $navBtn = $('.nav-btn');
  var $mainNav = $('.main-nav');
  var $treehouseStats = $('.treehouse-stats');
  var $url = 'https://teamtreehouse.com/andymurphy.json';
  var $skills = [];
  var $totalPoints = 0;

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

  $(".main-nav, .footer-nav").on('click', 'a', function (event) {
    event.preventDefault();
    $html.add($body).animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  // XMLHTTP Request to Treehouse for Points data
  $.get($url, function (response) {
    var $points = response.points;
    $.each($points, function (key, value) {
      if (value > 0 && key !== "total") {
        $skills.push(key);
      } else if (key === "total") {
        $totalPoints = value;
      }
    });
    // Append the Total points to the page
    $treehouseStats.append('<p>' + $totalPoints + '<br><span> points</span></p>');
    $treehouseStats.append('<div class="skills"></div>');
    $.each($skills, function (i, value) {
      // Append skills to page
      $('.skills').append('<span>' + value + ' </span>');
    });
  });

  // End of 'document.ready' statement.
});
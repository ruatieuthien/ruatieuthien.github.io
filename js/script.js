"use strict";

$(document).ready(function () {
  $('.slideshow_banner').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.show_menu').click(function () {
    $('.menu_respontive_ovelay').css({
      'right': 0
    });
    $('.menu_mobile').css({
      'left': 0
    });
  });
  $('.menu_respontive_ovelay').click(function () {
    $(this).css({
      'right': 'unset'
    });
    $('.menu_mobile').css({
      'left': '-100%'
    });
  });
});
$(document).on('click', '.btn_next--page', function () {
  $('html,body').animate({
    scrollTop: 0
  }, 'fast');
});
$(window).scroll(function () {
  var numberScroll = $(this).scrollTop();
  console.log(numberScroll, 'header');

  if (numberScroll > 100) {
    $('.main_header').addClass('go_fixed');
  } else {
    $('.main_header').removeClass('go_fixed');
  }
});
$('.head_tabs li').click(function () {
  // Remove class on head tabs
  $('.head_tabs li').removeClass('on');
  $('.content_tabs li').removeClass('on'); // Get Attribute

  var get_id_tabs = $(this).attr('data-tabs'); // addClass

  $(this).addClass('on');
  $('#' + get_id_tabs).addClass('on');
});
var modal = document.getElementsByClassName('sign');
var btn = document.getElementsByClassName('btn_join_us');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
}; // When the user clicks anywhere outside of the modal, close it


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}; // $('.btn_join_us').click(function () {
//   $('.sign').css({
//     'display': 'block'
//     })
//   });
//   $('body').click(function () {
//     $(this).css({
//     })
//   });
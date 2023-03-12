$(function(){
   let logoWidth = $('.logo').outerWidth();
   $('.banner').css({
    paddingLeft : `${logoWidth}px`
   })

   $('.hamburgerMenu i').click(function(){
    $('header .headerRightSec nav').slideToggle()
   })
})
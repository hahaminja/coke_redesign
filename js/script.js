$(document).ready(function(){
  $('.slider-wrap').slick({
    autoplay : true ,
    autoplaySpeed : 3000 ,
    dots: true,
    arrows : false,
  });

  $('.list_slide_wrap').slick({
    slidesToShow: 4,
    swipeToSlide: true,
    arrows:false,
    autoplay : true ,
    autoplaySpeed : 2000 ,
  });
});
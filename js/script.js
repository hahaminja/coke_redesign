$(document).ready(function(){
  $('.slider-wrap').slick({
    autoplay : true ,
    autoplaySpeed : 3000 ,
    dots: true,
    arrows : false,
    pauseOnHover: false,
  });

  $('.list_slide_wrap').slick({
    slidesToShow: 4,
    swipeToSlide: true,
    arrows:false,
    autoplay : true ,
    autoplaySpeed : 2000 ,
    pauseOnHover: false,

  });

  $('.slides-wrap').slick({
    dots:true,
    autoplay:true,
    autoplaySpeed : 3000,
    arrows:false,
    pauseOnHover: false,

  });

});
function Topbar__init(){
  var $Line = $(".top_menu_box_sub_line");

  $(".top_menu_box ul > li").mouseenter(function(){

    var $li = $(this);

    var left = $li.position().left;
    var width = $li.outerWidth();

    $Line.css({
      left: left,
      width: width
    });
  });
  $(".top_menu_box ul > li").eq(0).mouseenter();
}
Topbar__init();

// 슬릭 슬라이드
$(document).ready(function(){
  $("body").imagesLoaded(function(){
    AOS.refresh();
  });

  // 메인배너슬라이드 첫번째페이지 글씨 올라오기
$('.slider-wrap').on('init', function(event, slick){
  $(".slider-wrap .banner")
  .eq(1)
  .find($(".text-box"))
  .addClass("active");
});
// 캠페인배너 첫번째페이지 글씨 올라오기
$('.slides-wrap').on('init', function(event, slick){
  $(".slides-wrap .content")
  .eq(1)
  .find($(".text-box"))
  .addClass("active");
});

// 스크롤탑바 버튼
$(".up_btn").click(function(){
  $("html,body").animate({scrollTop: 0}, 600);
});

$(window).scroll(function(){

  var $scrollTop = $(this).scrollTop();

  if ($scrollTop > 1000) {
    $(".up_btn").css({ opacity: 1, visibility: "visible" });
  } else {
    $(".up_btn").css({ opacity: 0, visibility: "hidden" });
  }

});

// 서브메뉴 엑티브 끝
// 메인배너슬라이드 슬릭
  $(".slider-wrap").slick({
    autoplay : false ,
    autoplaySpeed : 3000 ,
    dots: true,
    arrows : false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  // 메인배너슬라이드 글씨 올라오기
  $(".slider-wrap").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-wrap .banner").find($(".text-box")).removeClass("active");

    $(".slider-wrap .banner")
      .eq(currentSlide + 1)
      .find($(".text-box"))
      .addClass("active");
  });


// 리스트_슬라이드
  $(".list_slide_wrap").slick({
    slidesToShow: 4,
    swipeToSlide: true,
    arrows:false,
    autoplay : true ,
    autoplaySpeed : 2000 ,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [ // 반응형 웹 구현
      {
        breakpoint:1024,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow: 2,
        }
      }
    ]
  });
// 캠페인 배너 슬라이드
  $(".slides-wrap").slick({
    dots:true,
    autoplay:false,
    autoplaySpeed : 3000,
    arrows:false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  // 캠페인 배너에 글씨 올라오기
  $(".slides-wrap").on("afterChange", function (event, slick, currentSlide) {
    $(".slides-wrap .content").find($(".text-box")).removeClass("active");

    $(".slides-wrap .content")
      .eq(currentSlide + 1)
      .find($(".text-box"))
      .addClass("active");
  });

// 스크롤트리거
gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer_img > img", {
  duration: 1,
  x:-800,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer_img > img",
    // markers:true,
    start:"top 80%",
    end:"bottom 30%",
    toggleActions: "play none none reverse"
  }
});

// 헤더 탑바_밑줄
function Topbar__init(){
  var $Line = $(".top_menu_box_sub_line");

  $(".top_menu_box > ul > li > a").mouseenter(function(){

    var $li = $(this);

    var left = $li.position().left;
    var width = $li.outerWidth();

    $Line.css({
      left: left,
      width: width,
    });
  });
  $(".top_menu_box > ul > li > a").eq(0).mouseenter();
}
Topbar__init();


AOS.init();

  // 반응형 토글메뉴
  const toggleBtn = document.querySelector(".toggle_btn")
  const wrap = document.querySelector(".toggle_wrap")
  const menu = document.querySelector(".toggle_menu")
  const icons = document.querySelector(".toggle_icons")

  toggleBtn.addEventListener("click", () => {
    wrap.classList.toggle("active")
    menu.classList.toggle("active");
    icons.classList.toggle("active");
  });

});






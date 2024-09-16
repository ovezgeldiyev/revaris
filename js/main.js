// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
let intro = document.getElementById("intro");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
// menu end

// scroll start
let infoSec = document.getElementById("infoSec");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  if (header.classList.contains("uniq")) {
    if (window.scrollY >= infoSec.offsetTop) {
      header.classList.add("light");
      intro.classList.add("active");
    } else {
      header.classList.remove("light");
      intro.classList.remove("active");
    }
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// sliders
$(function () {
  $(".property__inner-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// connected sliders
$(function () {
  $(".newsItem__slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: false,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".newsItem__swiper",
  });
});
$(function () {
  $(".newsItem__swiper").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    speed: 600,
    asNavFor: ".newsItem__slider",
    responsive: [
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 4.6,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// custom arrows
$(".info__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    fade: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

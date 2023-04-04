$(document).ready(function () {
  // navbar hide in scroll down
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   var appScroll = $(document).scrollTop();
  //   if (prevScrollpos > currentScrollPos) {
  //     $("header").css({
  //       top: "0px",
  //     });
  //   } else {
  //     $("header").css({
  //       top: "-100%",
  //     });
  //   }
  //   prevScrollpos = currentScrollPos;
  // };
  //MainSlider
  var mainSlider = new Swiper(".mainSliderContainer", {
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainSliderPrev",
    },
  });
  // services slider
  var servicesSlider = new Swiper(".servicesSlider", {
    navigation: {
      nextEl: ".servicesSliderNext",
      prevEl: ".servicesSliderPrev",
    },
    pagination: {
      el: ".servicesSlidePagination",
      type: "fraction",
    },
    // loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
  });
  $(".servicesSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  var mission = new Swiper(".mission", {
    navigation: {
      nextEl: ".missionNext",
      prevEl: ".missionPrev",
    },
    pagination: {
      el: ".servicesSlidePagination",
      type: "fraction",
    },
    // loop: true,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });
  // $(".hideSideBtn").click(function () {
  //   $(".shop .shopSide").toggleClass("showSide");
  // });
  var swiper = new Swiper(".productSlider", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: false,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //product Details Slider
  var productDetailsSlider = new Swiper(".productDetailsSlider", {
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".productDetailsSliderPagination",
      clickable: true,
    },
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  // quantity
  $(".plus").click(function () {
    $(this)
      .prev()
      .val(+$(this).prev().val() + 1);
  });
  $(".min").click(function () {
    if ($(this).next().val() > 1)
      $(this)
        .next()
        .val(+$(this).next().val() - 1);
  });
  const $showCol = $(".allProducts .row .showCol");
  $(".listDisplay").click(function () {
    if ($showCol.hasClass("col-sm-6 col-lg-4 col-xl-3")) {
      $showCol
        .removeClass("col-sm-6 col-lg-4 col-xl-3")
        .addClass("col-sm-12 col-xl-6 listShow");
    }
  });
  $(".gridDisplay").click(function () {
    if ($showCol.hasClass("col-sm-12 col-xl-6 listShow")) {
      $showCol
        .removeClass("col-sm-12 col-xl-6 listShow")
        .addClass("col-sm-6 col-lg-4 col-xl-3");
    }
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".spinner").fadeOut("slow");
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // select2
  $(".select2search").select2();
  $(".select2").select2({
    minimumResultsForSearch: -1,
  });
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    // easing: "linear",
    once: true,
  });
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

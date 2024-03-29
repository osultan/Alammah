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
  // Toggle mega menu on click of ".megaIcon" element
  $(".mega .megaIcon").click(function () {
    var megaMenu = $(this).siblings(".megaMenu");
    if (megaMenu.hasClass("showMegaMenu")) {
      megaMenu.removeClass("showMegaMenu");
    } else {
      $(".megaMenu.showMegaMenu").removeClass("showMegaMenu");
      megaMenu.addClass("showMegaMenu");
    }
  });
  // Hide mega menu on collapse of ".navbar-toggler" element
  $(".navbar-toggler").click(function () {
    if ($(this).hasClass("collapsed")) {
      $(".megaMenu.showMegaMenu").removeClass("showMegaMenu");
    }
  });
  //ourInvestorsSlider
  var ourInvestorsSlider = new Swiper(".ourInvestorsSlider", {
    spaceBetween: 12,
    speed: 1000,
    scrollbar: {
      el: ".swiper-scrollbar",
      // dragSize: 70,
      draggable: true,
      hide: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  //videoSlider
  var videoSlider = new Swiper(".videoSliderContainer", {
    spaceBetween: 0,
    // loop: true,
    // effect: "fade",
    speed: 500,
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".videoSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".videoSliderNext",
      prevEl: ".videoSliderPrev",
    },
  });
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
  //partnersSlider Slider
  var partnersSlider = new Swiper(".partnersSlider", {
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
  //project Details Slider
  var eventSlider = new Swiper(".eventSlider", {
    spaceBetween: 0,
    loop: false,
    // effect: "fade",
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".eventSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".eventSliderNext",
      prevEl: ".eventSliderPrev",
    },
  });
  //bestSelling
  var bestSellingSlider = new Swiper(".bestSellingSlider", {
    pagination: {
      el: ".bestSellingPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".bestSellingNext",
      prevEl: ".bestSellingPrev",
    },
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 1000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  $(".bestSellingSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

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
  $(".product .content a , .Moreblogs .blog .description").each(function () {
    var text = $(this).text();
    if (text.length > 70) {
      var truncatedText =
        $.trim(text).substring(0, 70).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
  });
  $(
    ".newsEvents .blogs .blog .description , .newsEvents .events .event .description  "
  ).each(function () {
    var text = $(this).text();
    if (text.length > 150) {
      var truncatedText =
        $.trim(text).substring(0, 150).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(truncatedText);
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

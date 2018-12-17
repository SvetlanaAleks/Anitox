$(document).ready(function() {
  $(".js_sec-8_slider").slick({
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  $(".sec-8-composition-btn").click(function() {
    $(this)
      .parent()
      .toggleClass("active");
    var text = $(this).text();
    if (text == "+") {
      $(this).text("-");
    } else {
      $(this).text("+");
    }
  });
});

$(document).ready(function() {
  $(".plus").click(function() {
    $(this)
      .parent()
      .toggleClass("active");
    var text = $(this).text();
    if (text == "+") {
      $(this).text("-");
    } else {
      $(this).text("+");
    }
  });
});

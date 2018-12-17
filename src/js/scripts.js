$(document).ready(function () {
  $(".js_sec-8_slider").slick({
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: false
        }
      }
    ]
  });

  $(".sec-8-composition-btn").click(function () {
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

$(document).ready(function () {
  $(".plus").click(function () {
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

if (innerWidth <= "992") {
  let brBlock = document.querySelectorAll(".hide-br");
  brBlock.forEach(function (elem) {
    elem.innerHTML = " ";
  });
}
if (innerWidth <= "769") {
  let brBlock = document.querySelectorAll(".hide-769");
  brBlock.forEach(function (elem) {
    elem.innerHTML = " ";
  });
}
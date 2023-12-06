function handleTickInit(tick) {
    var nextYear = (new Date()).getFullYear() + 1;
    
    Tick.count.down(nextYear + '-01-01').onupdate = function(value) {
      tick.value = value;
    };
  }


  $('.platinum_logo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    centerMode: true,
  });

  $('.gold_logo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    centerMode: true,
  });

  $('.silver_logo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 300,
    centerMode: true
  });
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
    responsive: [
      {
          breakpoint: 599, // define the breakpoint for small devices
          settings: {
              slidesToShow: 1, // adjust the number of slides for small devices
              centerMode: false // disable centerMode for small devices if needed
              // add more settings as needed
          }
      }
      // Add more responsive settings as needed for other breakpoints
  ]
  });

  $('.gold_logo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    centerMode: true,
    responsive: [
      {
          breakpoint: 599, // define the breakpoint for small devices
          settings: {
              slidesToShow: 1, // adjust the number of slides for small devices
              centerMode: false // disable centerMode for small devices if needed
              // add more settings as needed
          }
      }
      // Add more responsive settings as needed for other breakpoints
  ]
  });

  $('.silver_logo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 300,
    centerMode: true,
    responsive: [
      {
          breakpoint: 599, // define the breakpoint for small devices
          settings: {
              slidesToShow: 1, // adjust the number of slides for small devices
              centerMode: false // disable centerMode for small devices if needed
              // add more settings as needed
          }
      }
      // Add more responsive settings as needed for other breakpoints
  ]
  });

  $(document).ready(function() {
    var $backToTopBtn = $(".backToTop");

    // Initially hide the button
    $backToTopBtn.hide();

    // Show or hide the button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $backToTopBtn.fadeIn();
        } else {
            $backToTopBtn.fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $backToTopBtn.click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
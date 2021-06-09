$(document).ready(function () {
  $(window).on('load', function () {
    var $landingWrapper = $('.landing-wrapper'),
      $landingInnerContent = $('.landing-inner-content');

    $landingInnerContent.on('mousemove touchmove', function (e) {
      var xMove = '+=0',
        yMove = '+=0';
      if (e.clientX > $landingWrapper.width() / 2) {
        xMove = '+=200';
      } else {
        xMove = '-=200';
      }
      if (e.clientY > $landingWrapper.height() / 2) {
        yMove = '+=200';
      } else {
        yMove = '-=200';
      }

      TweenMax.to($landingWrapper, 5, {
        scrollTo: {
          x: xMove,
          y: yMove,
        },
        ease: Power0.easeNone,
        overwrite: 'all',
        repeat: -1,
      });
    });
  });

  var rect = $('.landing-wrapper')[0].getBoundingClientRect();
  // create mouse object to keep track of mouse coordinates
  var mouse = { x: 0, y: 0, moved: false };

  $('.landing-wrapper').mousemove(function (e) {
    mouse.moved = true;

    mouse.x = e.clientX - rect.left; // e = event
    mouse.y = e.clientY - rect.top;
  });

  TweenLite.ticker.addEventListener('tick', function () {
    if (mouse.moved) {
      parallaxIt('.two', 1, -75);
      parallaxIt('.one', 1, -100);
      parallaxIt('.three', 1, 100);
    }

    mouse.moved = false;
  });

  function parallaxIt(target, duration, movement) {
    TweenMax.to(target, duration, {
      x: ((mouse.x - rect.width / 2) / rect.width) * movement,
      y: ((mouse.y - rect.height / 2) / rect.height) * movement,
      ease: Sine.easeOut,
    }); //SlowMo.ease});
  }

  // Recaclulate container dimensions on resize and scroll
  $(window).on('resize scroll', function () {
    rect = $('.landing-wrapper')[0].getBoundingClientRect();
  });

  //   Zoom element on hover alongside with next ones
  $(document).ready(function () {
    $('.slide').on('mouseenter', function () {
      $(this).prev().addClass('beside');
      $(this).next().addClass('beside');
    });
    $('.slide').on('mouseleave', function () {
      $(this).prev().removeClass('beside');
      $(this).next().removeClass('beside');
    });
  });

  // end zoom
});

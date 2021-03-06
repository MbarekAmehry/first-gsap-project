$(document).ready(function () {
  var timeout;
  $('#container').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);
  });

  function callParallax(e) {
    parallaxIt(e, '.slide', -190);
    // parallaxIt(e, 'img', -30);
  }

  function parallaxIt(e, target, movement) {
    var $this = $('#container');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: ((relX - $this.width() / 2) / $this.width()) * movement,
      y: ((relY - $this.height() / 2) / $this.height()) * movement,
      ease: Power2.easeOut,
    });
  }

  //   Zoom element on hover alongside with next ones

  var mX,
    mY,
    distance,
    $slides = $('.slide');

  $slides.mouseenter(function () {
    TweenMax.to($slides.not(this), 0.23, { scale: 1 });
    TweenMax.to(this, 0.3, { scale: 1.52 });
  });
  $slides.mouseleave(function () {
    TweenMax.to(this, 0.3, { scale: 1 });
  });

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left + elem.width() / 2), 2) +
          Math.pow(mouseY - (elem.offset().top + elem.height() / 2), 2)
      )
    );
  }

  $(document).mousemove(function (e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($slides, mX, mY);
    console.log(distance);
    if (distance < 800) {
      // $slides.addClass('beside');
    }
  });

  // $('.slide').on('mouseenter', function () {
  //   $(this).prev().addClass('beside');
  //   $(this).next().addClass('beside');
  // });
  // $('.slide').on('mouseleave', function () {
  //   $(this).prev().removeClass('beside');
  //   $(this).next().removeClass('beside');
  // });

  //
});

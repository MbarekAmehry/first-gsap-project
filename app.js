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

  var mX,
    mY,
    distance,
    $slides = $('.slide');

  $slides.click(function () {
    $(location).attr('href', 'slider.html');
  });

  // calc Distance between mouse and other elements
  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left + elem.width() / 2), 2) +
          Math.pow(mouseY - (elem.offset().top + elem.height() / 2), 2)
      )
    );
  }

  // Zoom element on mou
  // $slides.mouseenter(function () {
  //   TweenMax.to($slides.not(this), 0.23, { scale: 1 });
  //   TweenMax.to(this, 0.3, { scale: 1.852 });

  //   distance = calculateDistance($slides.not(this), mX, mY);
  //   console.log(distance);
  //   if (distance < 400) {
  //   } else {
  //     TweenMax.to($slides.not(this), 0.3, { scale: 1 });
  //   }
  // });

  // Remove zoom on mouseLeave
  // $slides.mouseleave(function () {
  //   TweenMax.to(this, 0.3, { scale: 1 });
  // });

  // $(document).mousemove(function (e) {
  //   mX = e.pageX;
  //   mY = e.pageY;
  //   distance = calculateDistance($slides, mX, mY);
  //   console.log(distance);
  //   if (distance < 800) {
  //     // $slides.addClass('beside');
  //   }
  // });

  // $('.slide').on('mouseenter', function () {
  //   $(this).prev().addClass('beside');
  //   $(this).next().addClass('beside');
  // });
  // $('.slide').on('mouseleave', function () {
  //   $(this).prev().removeClass('beside');
  //   $(this).next().removeClass('beside');
  // });

  //


  let imgs = document.getElementsByClassName('slide');
  let handleMousemove = (e) => {
    let range = 0;
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      img.classList.remove('active');
      if (
        img.offsetLeft + img.offsetWidth >= e.x - range &&
        img.offsetLeft <= e.x + range &&
        img.offsetTop + img.offsetHeight >= e.y - range &&
        img.offsetTop <= e.y + range
      ) {
        // img.classList.add('active');
        TweenMax.to(img, 0.3, { scale: 1.6 });
      } else {
        TweenMax.to(img, 0.3, { scale: 1 });
      }
    }
};


for (let i = 0; i < imgs.length; i++) {
  const img = imgs[i];
  img.addEventListener('mouseenter', handleMousemove);
  // img.addEventListener('mouseleave', handleMousemove);

}

});

var elements = $('.element');
var slideCount = elements.length;
var timeline = new TimelineMax({
  paused: true,
});
var activeSlide = slideCount - 1;

TweenMax.staggerFromTo(
  elements,
  2,
  {
    y: 100,
    opacity: 0,
  },
  {
    cycle: {
      y: function (i) {
        return i * -15 + 15;
      },
    },
    opacity: 1,
    ease: Back.easeOut,
    onComplete: function () {
      elements.on('click', changeSlide);
    },
  },
  0.2
);

function changeSlide() {
  if (timeline.isActive()) return;

  timeline = new TimelineMax();

  timeline.to(elements, 1, {
    y: '-=15',
  });
  timeline.to(
    elements[activeSlide],
    0.5,
    {
      opacity: 0,
      y: '-=15',
    },
    0
  );
  timeline.call(
    function () {
      var index = activeSlide;
      for (var i = slideCount; i > 0; i--) {
        TweenLite.set(elements[index], {
          zIndex: i,
        });
        index = --index < 0 ? slideCount - 1 : index;
      }
    },
    null,
    null,
    0.5
  );
  timeline.fromTo(
    elements[activeSlide],
    0.5,
    {
      y: 30,
    },
    {
      y: 15,
      opacity: 1,
      immediateRender: false,
    },
    0.5
  );

  activeSlide = --activeSlide < 0 ? slideCount - 1 : activeSlide;
}

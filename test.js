(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    'C7+y': function (t, e, i) {
      'use strict';
      var s = i('lwsE'),
        a = i.n(s),
        n = i('W8MJ'),
        r = i.n(n),
        o = i('a1gu'),
        h = i.n(o),
        c = i('Nsbk'),
        l = i.n(c),
        u = i('7W2i'),
        d = i.n(u),
        m = i('2+8n'),
        p =
          (Math.PI,
          (function (t) {
            function i(t) {
              var e;
              return (
                a()(this, i),
                ((e = h()(this, l()(i).call(this, t))).posX = 0),
                (e.posY = 0),
                (e.veloX = 0),
                (e.veloY = 0),
                (e.accelX = 0),
                (e.accelY = 0),
                (e.posXOf = 0),
                (e.posYOf = 0),
                (e.veloXOf = 0),
                (e.veloYOf = 0),
                (e.accelXOf = 0),
                (e.accelYOf = 0),
                (e.posXLength = 0),
                (e.posYLength = 0),
                (e.veloXLength = 0),
                (e.veloYLength = 0),
                (e.accelXLength = 0),
                (e.accelYLength = 0),
                (e.detailCursor = t.detailCursor),
                e.detailCursor &&
                  ((e.elNumber = e.el.querySelector('.cursor--number')),
                  (e.elOf = e.el.querySelector('.cursor--of')),
                  (e.elLength = e.el.querySelector('.cursor--length'))),
                e
              );
            }
            return (
              d()(i, t),
              r()(i, [
                {
                  key: 'set',
                  value: function (t, e) {
                    (this.posX = t),
                      (this.posY = e),
                      this.detailCursor &&
                        ((this.posXOf = t),
                        (this.posYOf = e),
                        (this.posXLength = t),
                        (this.posYLength = e));
                  },
                },
                {
                  key: 'update',
                  value: function (t, e) {
                    this.detailCursor
                      ? ((this.accelX = 0.1 * (t - this.posX)),
                        (this.accelY = 0.1 * (e - this.posY)),
                        Math.abs(t - this.posX) <= 0.001 && (this.posX = t),
                        Math.abs(e - this.posY) <= 0.001 && (this.posY = e),
                        (this.veloX += this.accelX),
                        (this.veloY += this.accelY),
                        (this.veloX *= 0.65),
                        (this.veloY *= 0.65),
                        (this.posX += this.veloX),
                        (this.posY += this.veloY),
                        (this.elNumber.style.transform = 'translate3d('
                          .concat(this.posX, 'px,')
                          .concat(this.posY, 'px, 0px)')),
                        (this.accelXOf = 0.09 * (t - this.posXOf)),
                        (this.accelYOf = 0.09 * (e - this.posYOf)),
                        Math.abs(t - this.posXOf) <= 0.001 && (this.posXOf = t),
                        Math.abs(e - this.posYOf) <= 0.001 && (this.posYOf = e),
                        (this.veloXOf += this.accelXOf),
                        (this.veloYOf += this.accelYOf),
                        (this.veloXOf *= 0.675),
                        (this.veloYOf *= 0.675),
                        (this.posXOf += this.veloXOf),
                        (this.posYOf += this.veloYOf),
                        (this.elOf.style.transform = 'translate3d('
                          .concat(this.posXOf, 'px,')
                          .concat(this.posYOf, 'px, 0px)')),
                        (this.accelXLength = 0.08 * (t - this.posXLength)),
                        (this.accelYLength = 0.08 * (e - this.posYLength)),
                        Math.abs(t - this.posXLength) <= 0.001 &&
                          (this.posXLength = t),
                        Math.abs(e - this.posYLength) <= 0.001 &&
                          (this.posYLength = e),
                        (this.veloXLength += this.accelXLength),
                        (this.veloYLength += this.accelYLength),
                        (this.veloXLength *= 0.7),
                        (this.veloYLength *= 0.7),
                        (this.posXLength += this.veloXLength),
                        (this.posYLength += this.veloYLength),
                        (this.elLength.style.transform = 'translate3d('
                          .concat(this.posXLength, 'px,')
                          .concat(this.posYLength, 'px, 0px)')))
                      : ((this.accelX = 0.1 * (t - this.posX)),
                        (this.accelY = 0.1 * (e - this.posY)),
                        Math.abs(t - this.posX) <= 0.001 && (this.posX = t),
                        Math.abs(e - this.posY) <= 0.001 && (this.posY = e),
                        (this.veloX += this.accelX),
                        (this.veloY += this.accelY),
                        (this.veloX *= 0.65),
                        (this.veloY *= 0.65),
                        (this.posX += this.veloX),
                        (this.posY += this.veloY),
                        (this.el.style.transform = 'translate3d('
                          .concat(this.posX, 'px,')
                          .concat(this.posY, 'px, 0px)')));
                  },
                },
              ]),
              i
            );
          })(m.a));
      e.a = p;
    },
    Ic2I: function (t, e, i) {
      var n = i('NVNq');
      t.exports = function (t) {
        'use strict';
        t = t || {};
        var i = '',
          e = n.$each,
          s = t.data,
          a = (t.$value, t.$index, n.$escape);
        return (
          (i +=
            '<section class="page-wrapper page" id="homepage">\n\t<div class="grid-container">\n\t\t<span class="cursor-name"></span>\n\t</div>\n\n\t<nav class="homepage-filters">\n\t\t'),
          e(s.categories, function (t, e) {
            (i += '\n\t\t<div class="filters-item" data-id="'),
              (i += a(n.slugify(e))),
              (i += '">\n\t\t\t<h4>'),
              (i += a(e)),
              (i += '</h4>\n\t\t\t<span>'),
              (i += a(t)),
              (i +=
                '</span>\n\t\t</div>\n\t\t<h4 class="filters-separator">/</h4>\n\t\t');
          }),
          (i += '\n\t</nav>\n</section>')
        );
      };
    },
    'SA+Z': function (t, e, i) {
      var s = i('wTVA'),
        a = i('EbDI'),
        n = i('wkBT');
      t.exports = function (t) {
        return s(t) || a(t) || n();
      };
    },
    TqsI: function (t, e, i) {
      'use strict';
      var s = new (function () {
        var e = this;
        (this.x = -1),
          (this.y = -1),
          (this.isMouseActive = !1),
          (this.handlersOnMouseMove = function (t) {
            (e.x = t.clientX),
              (e.y = t.clientY),
              e.isMouseActive || (e.isMouseActive = !0);
          }),
          (this.start = function () {
            e.isMouseActive ||
              document.addEventListener('mousemove', e.handlersOnMouseMove);
          });
      })();
      e.a = s;
    },
    Xe5c: function (t, e, i) {
      'use strict';
      var s = i('lwsE'),
        a = i.n(s),
        n = i('W8MJ'),
        r = i.n(n),
        o = i('a1gu'),
        h = i.n(o),
        c = i('Nsbk'),
        l = i.n(c),
        u = i('iWIM'),
        d = i.n(u),
        m = i('7W2i'),
        p = i.n(m),
        g = i('bPao'),
        v = i('zqjx'),
        f = i('4HhW'),
        y = (function (t) {
          function i(t) {
            var e;
            return (
              a()(this, i),
              ((e = h()(this, l()(i).call(this, t))).type =
                t.type || 'default'),
              e
            );
          }
          return (
            p()(i, t),
            r()(i, [
              {
                key: 'fetchData',
                value: function () {
                  var e = this;
                  if (this.props.endPoint) {
                    var t = '/data/' + this.props.endPoint;
                    fetch(t)
                      .then(function (t) {
                        return t.json();
                      })
                      .then(function (t) {
                        (e.data = t), e.promises.data.resolve();
                      })
                      .catch(function (t) {
                        e.promises.data.reject();
                      });
                  } else this.promises.data.resolve();
                },
              },
              {
                key: 'loadAssets',
                value: function () {
                  this.promises.data.resolve();
                },
              },
              {
                key: 'initData',
                value: function () {
                  this.data.meta && v.a.dispatch(Object(f.g)(this.data.meta)),
                    (this.props.data = this.data);
                },
              },
              {
                key: 'onInit',
                value: function () {
                  d()(l()(i.prototype), 'onInit', this).call(this);
                },
              },
            ]),
            i
          );
        })(g.a);
      e.a = y;
    },
    kdZZ: function (t, e, i) {
      'use strict';
      var s = i('lwsE'),
        a = i.n(s),
        n = i('W8MJ'),
        r = i.n(n),
        o = i('a1gu'),
        h = i.n(o),
        c = i('Nsbk'),
        l = i.n(c),
        u = i('iWIM'),
        d = i.n(u),
        m = i('7W2i'),
        p = i.n(m),
        g = i('2+8n'),
        v = i('F7I5'),
        f = (function (t) {
          function e() {
            return a()(this, e), h()(this, l()(e).apply(this, arguments));
          }
          return (
            p()(e, t),
            r()(e, [
              {
                key: 'setupDOM',
                value: function () {
                  TweenLite.set(this.el, { autoAlpha: 0 });
                },
              },
              {
                key: 'initTL',
                value: function () {
                  var t = this;
                  (this.TL.show = new v.gsap.timeline({
                    paused: !0,
                    onComplete: function () {
                      return t.onShown();
                    },
                  })),
                    this.TL.show.to(this.el, 0.3, {
                      autoAlpha: 1,
                      ease: Cubic.easeOut,
                    }),
                    (this.TL.hide = new v.gsap.timeline({
                      paused: !0,
                      onComplete: function () {
                        return t.onHidden();
                      },
                    })),
                    this.TL.hide.to(this.el, 0.5, {
                      autoAlpha: 0,
                      ease: Cubic.easeOut,
                    });
                },
              },
              {
                key: 'onDOMInit',
                value: function () {
                  document.getElementById('content').appendChild(this.el),
                    d()(l()(e.prototype), 'onDOMInit', this).call(this);
                },
              },
              {
                key: 'showComponent',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    t.TL.show.play(0);
                  }, 0);
                },
              },
              {
                key: 'hideComponent',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    t.TL.hide.play(0);
                  }, 0);
                },
              },
            ]),
            e
          );
        })(g.a);
      e.a = f;
    },
    nadO: function (t, e, i) {
      'use strict';
      i.r(e);
      var s = i('lSNA'),
        a = i.n(s),
        n = i('lwsE'),
        r = i.n(n),
        o = i('W8MJ'),
        h = i.n(o),
        c = i('a1gu'),
        l = i.n(c),
        u = i('Nsbk'),
        d = i.n(u),
        m = i('iWIM'),
        p = i.n(m),
        g = i('7W2i'),
        v = i.n(g),
        f = i('Xe5c'),
        y = i('SA+Z'),
        w = i.n(y),
        I = i('RIqP'),
        T = i.n(I),
        x = i('kdZZ'),
        k = i('Ic2I'),
        L = i.n(k),
        S = i('F7I5'),
        M = i('zqjx'),
        O = i('C7+y'),
        C = i('TqsI'),
        b = i('Hwyf'),
        A = i('4HhW');
      function X(t, e, i) {
        return t * (1 - i) + e * i;
      }
      function Y(t, e, i) {
        return Math.abs(e - t) <= 0.001 && (t = e), t * (1 - i) + e * i;
      }
      var D = (function (t) {
        function n(t) {
          var e;
          r()(this, n),
            ((e = l()(this, d()(n).call(this, t))).template = L.a),
            (e.lerpTest = 0),
            (e.improvedLerpTest = -100);
          var i = M.a.getState().app.deviceType;
          (e.isTouch = 'mobile' === i || 'tablet' === i),
            (e.isRetina = 2 <= window.devicePixelRatio),
            (e.time = 0),
            (e.scaleTarget = e.isTouch ? 0.3 : 0.25),
            (e.scaleRatioWidth = 0);
          var s = window.innerWidth,
            a = window.innerHeight;
          return (
            (e.mouse = { x: s / 2, y: a / 2 }),
            (e.camera = {
              width: s,
              height: a,
              x: (0.5 * s) / 2,
              y: (0.5 * a) / 2,
              lerpedX: (0.5 * s) / 2,
              lerpedY: (0.5 * a) / 2,
            }),
            (e.viewport = { width: 1.5 * s, height: 1.5 * a, margin: 0 }),
            (e.lerpedScale = { x: 0, y: 0 }),
            (e.currentTitle = null),
            (e.currentClickedItem = null),
            (e.gridItems = null),
            (e.filteredGridItems = null),
            e.onResize({ width: s, height: a }),
            e.isTouch || C.a.start(),
            (e.camera.x = (e.viewport.width - e.camera.width) / 2),
            (e.camera.y = (e.viewport.height - e.camera.height) / 2),
            (e.camera.lerpedX = (e.viewport.width - e.camera.width) / 2),
            (e.camera.lerpedY = (e.viewport.height - e.camera.height) / 2),
            (e.storeEvents = {
              browser: function (t) {
                return e.onResize(t);
              },
            }),
            (e.events = {
              'click .filters-item': function (t) {
                return e.onFilterItemClicked(t);
              },
            }),
            (e.states = {
              mouseActive: !0,
              canScale: !1,
              canReorder: !1,
              canMouveMose: !1,
              loaderShown: !1,
              introShown: !1,
              homepageToDetailAnimation: !1,
              canUpdateCursor: !0,
              activeFilters: [],
              quickAnimIntro: !1,
            }),
            e
          );
        }
        return (
          v()(n, t),
          h()(n, [
            {
              key: 'currentClosestItem',
              get: function () {
                return this.gridItems[this.gridItems.length - 1];
              },
            },
          ]),
          h()(n, [
            {
              key: 'initDOM',
              value: function () {
                (this.$grid = this.el.querySelector('.grid-container')),
                  (this.$filters = this.el.querySelectorAll('.filters-item')),
                  (this.$filtersContainer =
                    this.el.querySelector('.homepage-filters')),
                  this.isTouch
                    ? (this.cursorMobile =
                        this.el.querySelector('.cursor-name'))
                    : ((this.cursor = new O.a({
                        el: this.el.querySelector('.cursor-name'),
                      })),
                      this.cursor.init());
              },
            },
            {
              key: 'onDOMInit',
              value: function () {
                var t = this,
                  e = T()(this.$filters).map(function (t) {
                    return t.dataset.id;
                  });
                this.setState({ activeFilters: e }, function () {
                  return t.onFiltersUpdate();
                }),
                  this.isTouch ? this.initGridMobile() : this.initGrid(),
                  p()(d()(n.prototype), 'onDOMInit', this).call(this);
              },
            },
            {
              key: 'initTL',
              value: function () {
                var t = this;
                (this.TL.show = new S.gsap.timeline({
                  paused: !0,
                  onComplete: function () {
                    return t.onShown();
                  },
                })),
                  this.TL.show.to(this.el, 0.1, {
                    autoAlpha: 1,
                    ease: S.Cubic.easeOut,
                  }),
                  (this.TL.hide = new S.gsap.timeline({
                    paused: !0,
                    onComplete: function () {
                      return t.onHidden();
                    },
                  })),
                  this.TL.hide.to(this.el, 0.5, {
                    autoAlpha: 0,
                    ease: S.Cubic.easeOut,
                  });
              },
            },
            {
              key: 'addEvents',
              value: function () {
                var e = this;
                (this.handlers.onMouseMove = function (t) {
                  (e.mouse.x = C.a.x), (e.mouse.y = C.a.y);
                }),
                  (this.handlers.onTouchMove = function (t) {
                    (e.mouse.x = t.targetTouches[0].pageX),
                      (e.mouse.y = t.targetTouches[0].pageY);
                  }),
                  (this.handlers.onClick = function (t) {
                    return e.onClickHomepage(t);
                  }),
                  this.canvas.addEventListener('click', this.handlers.onClick),
                  (this.handlers.mouseEnter = function (t) {
                    (C.a.isMouseActive = !0),
                      e.cursorMobile && (e.cursorMobile.style.opacity = 1),
                      e.isTouch &&
                        ((e.mouse.x = t.targetTouches[0].pageX),
                        (e.mouse.y = t.targetTouches[0].pageY)),
                      e.setState({ mouseActive: !0 });
                  }),
                  (this.handlers.touchStart = function (t) {
                    e.isTouch &&
                      ((e.mouse.x = t.targetTouches[0].pageX),
                      (e.mouse.y = t.targetTouches[0].pageY)),
                      e.touchStartTimer && e.touchStartTimer.kill(),
                      (e.touchStartTimer = S.gsap.delayedCall(
                        0.15,
                        function () {
                          e.handlers.mouseEnter(t);
                        }
                      ));
                  }),
                  (this.handlers.mouseLeave = function (t) {
                    e.cursorMobile && (e.cursorMobile.style.opacity = 0),
                      e.setState({ mouseActive: !1 });
                  }),
                  (this.handlers.touchend = function () {
                    e.touchStartTimer && e.touchStartTimer.kill(),
                      e.handlers.mouseLeave();
                  }),
                  this.isTouch
                    ? (this.el.addEventListener(
                        'touchmove',
                        this.handlers.onTouchMove
                      ),
                      this.el.addEventListener(
                        'touchstart',
                        this.handlers.touchStart
                      ),
                      this.el.addEventListener(
                        'touchend',
                        this.handlers.touchend
                      ))
                    : (this.el.addEventListener(
                        'mousemove',
                        this.handlers.onMouseMove
                      ),
                      document.addEventListener(
                        'mouseenter',
                        this.handlers.mouseEnter
                      ),
                      document.addEventListener(
                        'mouseleave',
                        this.handlers.mouseLeave
                      ));
              },
            },
            {
              key: 'hideComponent',
              value: function () {
                'homepageToDetail' === M.a.getState().app.animationType
                  ? (S.gsap.to(this.$filtersContainer, {
                      opacity: 0,
                      duration: 0.5,
                      ease: S.Cubic.easeInOut,
                    }),
                    this.hideCursor())
                  : p()(d()(n.prototype), 'hideComponent', this).call(this);
              },
            },
            {
              key: 'hideCursor',
              value: function () {
                this.cursor && (this.cursor.el.style.opacity = 0),
                  this.cursorMobile && (this.cursorMobile.style.opacity = 0),
                  (this.canvas.style.cursor = 'auto');
              },
            },
            {
              key: 'onClickHomepage',
              value: function () {
                var t = this.mouse,
                  e = t.x,
                  i = t.y;
                if (this.states.canReorder) {
                  for (var s = [], a = 0; a < this.gridItems.length; a++) {
                    var n = this.gridItems[a];
                    if (!n.isFilteredOut) {
                      var r = n.initialWidth * n.lerpedScale.x,
                        o = n.initialHeight * n.lerpedScale.y,
                        h = n.realX - r / 2,
                        c = n.realY - o / 2;
                      h <= e && e <= h + r && c <= i && i <= c + o && s.push(n);
                    }
                  }
                  0 < s.length &&
                    ((this.currentClickedItem = this.currentClosestItem),
                    b.a.navigate(this.currentClosestItem.url));
                }
              },
            },
            {
              key: 'onFilterItemClicked',
              value: function (t) {
                var e = this;
                if (
                  !this.states.introShown ||
                  this.states.homepageToDetailAnimation
                )
                  return !1;
                var i = t.currentTarget.dataset.id,
                  s = this.states.activeFilters,
                  a = T()(s);
                s.length === this.$filters.length
                  ? (a = [i])
                  : (s.includes(i) ? a.splice(s.indexOf(i), 1) : a.push(i),
                    0 === a.length &&
                      (a = T()(this.$filters).map(function (t) {
                        return t.dataset.id;
                      }))),
                  this.setState({ activeFilters: a }, function () {
                    return e.onFiltersUpdate();
                  });
              },
            },
            {
              key: 'onFiltersUpdate',
              value: function () {
                for (
                  var t = this.states.activeFilters, e = 0;
                  e < this.$filters.length;
                  e++
                ) {
                  var i = this.$filters[e];
                  t.includes(i.dataset.id)
                    ? i.classList.add('is-active')
                    : i.classList.remove('is-active');
                }
                this.gridItems && this.filterGridItems();
              },
            },
            {
              key: 'filterGridItems',
              value: function () {
                var e = this.states.activeFilters,
                  t = this.gridItems.filter(function (t) {
                    return !e.includes(t.category);
                  }),
                  i = this.gridItems.filter(function (t) {
                    return e.includes(t.category) && t.isFilteredOut;
                  });
                t.forEach(function (t) {
                  (t.scale = t.lerpedScale.x),
                    t.filterTween && t.filterTween.kill();
                  var e = S.gsap.to(t, {
                    opacity: 0,
                    scale: 0.14,
                    duration: 0.6,
                    ease: S.Cubic.easeIn,
                  });
                  (t.isFilteredOut = !0), (t.filterTween = e);
                }),
                  i.forEach(function (t) {
                    t.filterTween && t.filterTween.kill();
                    var e = S.gsap.to(t, { opacity: 1 });
                    (t.isFilteredOut = !1), (t.filterTween = e);
                  }),
                  (this.filteredGridItems = this.gridItems.filter(function (t) {
                    return !t.isFilteredOut;
                  }));
              },
            },
            {
              key: 'initGrid',
              value: function () {
                var i = this,
                  t = M.a.getState().app.isHomepageVisited;
                this.setState({ quickAnimIntro: t }),
                  (this.rows = 5),
                  (this.columns = 7),
                  (this.images = this.getRandomImages());
                var s = this.createGridPosition();
                (this.gridItems = s.map(function (t, e) {
                  return i.createImageGridItem(t.position, e, s.length);
                })),
                  this.prepareItemsForLoader(),
                  this.renderGridCanvas();
              },
            },
            {
              key: 'initGridMobile',
              value: function () {
                var i = this,
                  t = M.a.getState().app.isHomepageVisited;
                this.setState({ quickAnimIntro: t }),
                  (this.rows = 5),
                  (this.columns = 4),
                  (this.images = this.getRandomImages());
                var s = this.createGridPosition();
                (this.gridItems = s.map(function (t, e) {
                  return i.createImageGridItem(t.position, e, s.length);
                })),
                  this.prepareItemsForLoader(),
                  this.renderGridCanvas();
              },
            },
            {
              key: 'getRandomImages',
              value: function () {
                var t = (function (t) {
                    for (var e, i, s = w()(t).slice(0), a = s.length; 0 !== a; )
                      (i = Math.floor(Math.random() * a)),
                        (e = s[(a -= 1)]),
                        (s[a] = s[i]),
                        (s[i] = e);
                    return s;
                  })(this.data.collections),
                  e = [],
                  i = 0,
                  s = 0;
                t.forEach(function (t) {
                  e.push(t.images[0]);
                });
                for (var a = this.rows * this.columns - e.length; 0 < a; ) {
                  var n = t[i].images,
                    r = n[Math.floor((n.length - 1) * Math.random())],
                    o = this.checkIfImageIsInArray(r, e);
                  o && s++,
                    30 < s && ((s = 0), (i += 1) >= t.length - 1 && (i = 0)),
                    o ||
                      ((s = 0),
                      (a -= 1),
                      (i += 1) >= t.length - 1 && (i = 0),
                      e.push(r));
                }
                return e;
              },
            },
            {
              key: 'checkIfImageIsInArray',
              value: function (e, t) {
                var i = !1;
                return (
                  t.forEach(function (t) {
                    Object.entries(t).toString() ===
                      Object.entries(e).toString() && (i = !0);
                  }),
                  i
                );
              },
            },
            {
              key: 'createGridPosition',
              value: function () {
                for (
                  var t = [],
                    e = Math.ceil(4 * Math.random()),
                    i = Math.floor(
                      (this.rows * this.columns - e) * Math.random()
                    ),
                    s = Math.floor(4 * Math.random()),
                    a = Math.floor(
                      (this.rows * this.columns - s) * Math.random()
                    ),
                    n = [],
                    r = 0;
                  r < e;
                  r++
                )
                  n.push(i + r);
                for (var o = 0; o < s; o++) n.push(a + o);
                for (var h = 0; h < this.rows; h++)
                  for (
                    var c = 0.1 * Math.random(), l = 0.1 * Math.random(), u = 0;
                    u < this.columns;
                    u++
                  ) {
                    for (var d = void 0, m = !1, p = 0; !m && p < 100; )
                      (d = this.getPointCoordinates(
                        u,
                        h,
                        this.columns,
                        this.rows,
                        c,
                        l,
                        n
                      )),
                        (m = this.checkDistance(d, t)),
                        p++;
                    t.push({ position: d });
                  }
                return t;
              },
            },
            {
              key: 'getPointCoordinates',
              value: function (t, e, i, s, a, n, r) {
                var o = t + e * i,
                  h = t / (i - 1),
                  c = e / (s - 1);
                if (
                  ((h = X(a, 1 - n, h)),
                  (h += 0.2 * Math.random() - 0.1),
                  !r.includes(o))
                ) {
                  switch (t) {
                    case 0:
                      h += 0.15 * Math.random() - 0.05;
                      break;
                    case t === i - 1:
                      h += -0.15 * Math.random() - 0.05;
                      break;
                    default:
                      h += 0.2 * Math.random() - 0.1;
                  }
                  switch (e) {
                    case 0:
                      c += 0.2 * Math.random() - 0.05;
                      break;
                    case e === s - 1:
                      c -= 0.15 * Math.random() - 0.05;
                      break;
                    default:
                      c -= 0.2 * Math.random() - 0.1;
                  }
                }
                return [h, c];
              },
            },
            {
              key: 'createImageGridItem',
              value: function (t, e, i) {
                var s,
                  a,
                  n = this.images[e];
                return (
                  this.isTouch
                    ? ((s = n.url + '?format&w=622&h=514'),
                      (a = 514 / n.dimensions.height),
                      n.dimensions.width > n.dimensions.height &&
                        (a = 622 / n.dimensions.width))
                    : ((s =
                        this.isRetina || this.isTouch
                          ? n.url + '?format&w=1000&h=800'
                          : n.url + '?format&w=830&h=685'),
                      (a = 685 / n.dimensions.height),
                      n.dimensions.width > n.dimensions.height &&
                        (a = 830 / n.dimensions.width)),
                  {
                    uid: e,
                    isLoaded: !1,
                    isPartOfLoader: !1,
                    source: s,
                    title: n.title,
                    url: n.urlDetail,
                    imageUrl: n.url,
                    category: (function (t) {
                      return t
                        .toString()
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^\w\-]+/g, '')
                        .replace(/\-\-+/g, '-')
                        .replace(/^-+/, '')
                        .replace(/-+$/, '');
                    })(n.category),
                    x: t[0],
                    y: t[1],
                    xLoader: t[0],
                    yLoader: t[1],
                    scaleLoader: this.scaleTarget,
                    initialWidth: n.dimensions.width * a,
                    initialHeight: n.dimensions.height * a,
                    type:
                      n.dimensions.width > n.dimensions.height
                        ? 'large'
                        : 'long',
                    dimensions: n.dimensions,
                    scale: 1,
                    opacity: 0,
                    zIndex: 0,
                    realX: 0,
                    realY: 0,
                    lerpedScale: { x: 0, y: 0 },
                  }
                );
              },
            },
            {
              key: 'prepareItemsForLoader',
              value: function () {
                var a = this;
                this.gridItems.forEach(function (t) {
                  t.distance = a.distance(t.x, t.y, 0.5, 0.5);
                }),
                  this.reorderArrayBasedOnDistance(this.gridItems),
                  this.gridItems.forEach(function (t, e) {
                    if (e > a.gridItems.length - 6) {
                      t.isPartOfLoader = !0;
                      var i = 0 + 0.2 * (1 - e / a.gridItems.length),
                        s = 0.3 + 0.6 * (1 - e / a.gridItems.length);
                      (t.scaleLoader = s),
                        (t.xLoader = 0.5 - i + Math.random() * i * 2),
                        (t.yLoader = 0.5 - i + Math.random() * i * 2);
                    }
                  });
              },
            },
            {
              key: 'checkDistance',
              value: function (t, e) {
                for (
                  var i = !0,
                    s = X(
                      this.viewport.margin,
                      this.viewport.width - this.viewport.margin,
                      t[0]
                    ),
                    a = X(
                      this.viewport.margin,
                      this.viewport.height - this.viewport.margin,
                      t[1]
                    ),
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var r = e[n].position,
                    o = X(
                      this.viewport.margin,
                      this.viewport.width - this.viewport.margin,
                      r[0]
                    ),
                    h = X(
                      this.viewport.margin,
                      this.viewport.height - this.viewport.margin,
                      r[1]
                    );
                  this.distance(s, a, o, h) <= 135 && (i = !1);
                }
                return i;
              },
            },
            {
              key: 'renderGridCanvas',
              value: function () {
                var e = this;
                (this.canvas = document.createElement('canvas')),
                  (this.context = this.canvas.getContext('2d')),
                  (this.context.canvas.width = window.innerWidth),
                  (this.context.canvas.height = window.innerHeight),
                  this.$grid.appendChild(this.canvas),
                  this.update(),
                  this.loadTexturesCanvas(this.gridItems).then(function (t) {
                    e.setState({ loaderShown: !0 }),
                      e.states.quickAnimIntro
                        ? e.animateQuickIntro()
                        : e.animateIntro(),
                      M.a.dispatch(Object(A.f)(!0));
                  });
              },
            },
            {
              key: 'animateIntro',
              value: function () {
                var i = this;
                (this.TL.Intro = new S.gsap.timeline({
                  paused: !0,
                  onComplete: function () {
                    return i.onIntroShown();
                  },
                })),
                  this.gridItems.forEach(function (t) {
                    var e = 0.5 * Math.random();
                    S.gsap.to(t, {
                      delay: 1 + e,
                      duration: 2,
                      opacity: 1,
                      ease: 'Quint.easeInOut',
                    }),
                      i.TL.Intro.to(
                        t,
                        {
                          delay: 1,
                          duration: 1.2,
                          xLoader: t.x,
                          yLoader: t.y,
                          scaleLoader: i.scaleTarget,
                          ease: 'Quint.easeInOut',
                        },
                        e
                      );
                  }),
                  (this.canScaleIntroTimer = S.gsap.delayedCall(
                    3.2,
                    function () {
                      i.setState({ canScale: !0 });
                    }
                  )),
                  (this.canMoveIntroTimer = S.gsap.delayedCall(
                    2.2,
                    function () {
                      i.setState({ canReorder: !0 }),
                        i.setState({ canMouveMose: !0 });
                    }
                  )),
                  this.TL.Intro.play();
              },
            },
            {
              key: 'animateQuickIntro',
              value: function () {
                var i = this;
                (this.TL.Intro = new S.gsap.timeline({
                  paused: !0,
                  onComplete: function () {
                    return i.onIntroShown();
                  },
                })),
                  this.gridItems.forEach(function (t) {
                    var e = 0.2 + 0.5 * Math.random();
                    (t.xLoader = t.x),
                      (t.yLoader = t.y),
                      (t.scaleLoader = i.scaleTarget - 0.05),
                      S.gsap.to(t, {
                        delay: e,
                        duration: 1.7,
                        opacity: 1,
                        ease: 'Power4.easeInOut',
                      }),
                      i.TL.Intro.to(
                        t,
                        {
                          duration: 1.2,
                          scaleLoader: i.scaleTarget,
                          ease: 'Power4.easeInOut',
                        },
                        e
                      );
                  }),
                  this.setState({ canMouveMose: !0 }),
                  this.isTouch && this.setState({ mouseActive: !1 }),
                  (this.canScaleQuickIntroTimer = S.gsap.delayedCall(
                    1.9,
                    function () {
                      i.setState({ canScale: !0 });
                    }
                  )),
                  (this.canReorderQuickIntroTimer = S.gsap.delayedCall(
                    1.5,
                    function () {
                      i.setState({ canReorder: !0 });
                    }
                  )),
                  this.TL.Intro.play();
              },
            },
            {
              key: 'onIntroShown',
              value: function () {
                S.gsap.set(this.$filtersContainer, { y: 30 }),
                  S.gsap.to(this.$filtersContainer, {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: Power4.easeOut,
                  }),
                  this.setState({ introShown: !0 });
              },
            },
            {
              key: 'loadTexturesCanvas',
              value: function (s) {
                var n = this;
                return new Promise(function (t, e) {
                  var i = [];
                  T()(s)
                    .reverse()
                    .forEach(function (s, a) {
                      var t = new Promise(function (t, e) {
                        var i = new Image();
                        (i.onload = function () {
                          (s.isLoaded = !0),
                            n.states.quickAnimIntro
                              ? t()
                              : n.loadedAnimation(s, a, t);
                        }),
                          (i.src = s.source),
                          (s.image = i);
                      });
                      i.push(t);
                    }),
                    Promise.all(i).then(function () {
                      t();
                    });
                });
              },
            },
            {
              key: 'loadedAnimation',
              value: function (t, e, i) {
                if (t.isPartOfLoader) {
                  var s = t.xLoader,
                    a = t.yLoader;
                  (t.xLoader = 0.5),
                    (t.yLoader = 0.5),
                    S.gsap.to(t, {
                      duration: 0.8,
                      opacity: 1,
                      delay: 0.3 * e,
                      ease: S.Cubic.easeInOut,
                    }),
                    S.gsap.to(t, {
                      duration: 1.2,
                      xLoader: s,
                      yLoader: a,
                      delay: 0.3 * e,
                      ease: S.Cubic.easeInOut,
                      onComplete: function () {
                        i();
                      },
                    });
                } else i();
              },
            },
            {
              key: 'update',
              value: function () {
                var t = this;
                this.updateCamera(),
                  this.context.clearRect(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                  );
                for (var e = 0; e < this.gridItems.length; e++) {
                  var i = this.gridItems[e];
                  if (this.states.canScale && !i.isFilteredOut) {
                    var s = this.distance(
                        i.realX,
                        i.realY,
                        this.mouse.x,
                        this.mouse.y
                      ),
                      a = 1 - this.scaleTarget,
                      n = this.isTouch
                        ? 320 * this.scaleRatioWidth
                        : 460 * this.scaleRatioWidth,
                      r = Math.min(n, Math.abs(s)) / n,
                      o = C.a.isMouseActive ? a - a * r : 0;
                    this.states.mouseActive || (o = 0);
                    var h = this.scaleTarget + o;
                    (i.lerpedScale.x = Y(i.lerpedScale.x, h, 0.2)),
                      (i.lerpedScale.y = Y(i.lerpedScale.y, h, 0.2)),
                      (i.distance = s);
                  }
                  if (
                    !this.states.canScale &&
                    this.states.introShown &&
                    !this.states.homepageToDetailAnimation
                  ) {
                    var c = this.distance(
                        i.realX,
                        i.realY,
                        this.mouse.x,
                        this.mouse.y
                      ),
                      l = 1 - this.scaleTarget,
                      u = this.isTouch
                        ? 320 * this.scaleRatioWidth
                        : 460 * this.scaleRatioWidth,
                      d = Math.min(u, Math.abs(c)) / u,
                      m = C.a.isMouseActive ? l - l * d : 0;
                    this.states.mouseActive || (m = 0);
                    var p = this.scaleTarget + m;
                    (i.lerpedScale.x = Y(i.lerpedScale.x, p, 0.075)),
                      (i.lerpedScale.y = Y(i.lerpedScale.y, p, 0.075)),
                      (i.distance = c);
                  }
                  i.isFilteredOut &&
                    ((i.lerpedScale.x = i.scale), (i.lerpedScale.y = i.scale)),
                    i.isTransitioningOut &&
                      ((i.lerpedScale.x = i.scale),
                      (i.lerpedScale.y = i.scale)),
                    i.isClickedItem &&
                      ((i.lerpedScale.x = i.scale),
                      (i.lerpedScale.y = i.scale)),
                    this.states.introShown ||
                      ((i.lerpedScale.x = i.scaleLoader),
                      (i.lerpedScale.y = i.scaleLoader)),
                    i.isTransitioningToDetail &&
                      ((i.lerpedScale.x = i.scale),
                      (i.lerpedScale.y = i.scale)),
                    this.renderImageCanvas(i);
                }
                if (this.states.canReorder) {
                  this.reorderArrayBasedOnDistance(this.gridItems);
                  var g = this.filteredGridItems || this.gridItems;
                  this.reorderArrayBasedOnDistance(g);
                  var v = g[g.length - 1].title;
                  v !== this.currentTitle &&
                    ((this.currentTitle = v),
                    this.cursor && (this.cursor.el.textContent = v),
                    this.cursorMobile && (this.cursorMobile.textContent = v));
                }
                this.cursor &&
                  this.states.canUpdateCursor &&
                  this.cursor.update(this.mouse.x, this.mouse.y),
                  (this.raf = window.requestAnimationFrame(function () {
                    return t.update();
                  }));
              },
            },
            {
              key: 'renderImageCanvas',
              value: function (t) {
                if (!t.isLoaded) return !1;
                var e,
                  i,
                  s = this.states.introShown ? t.x : t.xLoader,
                  a = this.states.introShown ? t.y : t.yLoader,
                  n =
                    Y(
                      this.viewport.margin,
                      this.viewport.width - this.viewport.margin,
                      s
                    ) - this.camera.lerpedX,
                  r =
                    Y(
                      this.viewport.margin,
                      this.viewport.height - this.viewport.margin,
                      a
                    ) - this.camera.lerpedY;
                (t.realX = n),
                  (t.realY = r),
                  (i = this.states.homepageToDetailAnimation
                    ? ((e =
                        t.lerpedAnimationWidth *
                        t.lerpedScale.x *
                        this.scaleRatioWidth),
                      t.lerpedAnimationHeight *
                        t.lerpedScale.y *
                        this.scaleRatioWidth)
                    : ((e =
                        t.initialWidth *
                        t.lerpedScale.x *
                        this.scaleRatioWidth),
                      t.initialHeight *
                        t.lerpedScale.y *
                        this.scaleRatioWidth)),
                  this.context.translate(n, r),
                  this.context.translate(-e / 2, -i / 2),
                  1 !== t.opacity
                    ? (this.context.globalAlpha = t.opacity)
                    : (this.context.globalAlpha = 1),
                  this.context.drawImage(t.image, 0, 0, e, i),
                  t.isTransitioningToDetail &&
                    ((this.context.fillStyle = t.transitionColor),
                    this.context.beginPath(),
                    (this.context.globalAlpha = t.transitionOpacity),
                    this.context.rect(-1, -1, e + 2, i + 2),
                    this.context.fill(),
                    (this.context.globalAlpha = 1)),
                  this.context.setTransform(1, 0, 0, 1, 0, 0),
                  (this.isRetina || this.isTouch) && this.context.scale(2, 2);
              },
            },
            {
              key: 'updateCamera',
              value: function () {
                if (
                  this.states.canMouveMose &&
                  !this.states.homepageToDetailAnimation
                ) {
                  var t =
                      this.viewport.width -
                      this.camera.width +
                      this.viewport.margin / 2,
                    e =
                      this.viewport.height -
                      this.camera.height +
                      this.viewport.margin / 2,
                    i = this.mouse.x / this.width,
                    s = this.mouse.y / this.height;
                  (this.camera.x = Y(-this.viewport.margin / 2, t, i)),
                    (this.camera.y = Y(-this.viewport.margin / 2, e, s)),
                    (this.camera.lerpedX = Y(
                      this.camera.lerpedX,
                      this.camera.x,
                      0.076
                    )),
                    (this.camera.lerpedY = Y(
                      this.camera.lerpedY,
                      this.camera.y,
                      0.076
                    ));
                }
                this.states.homepageToDetailAnimation &&
                  ((this.camera.lerpedX = this.camera.x),
                  (this.camera.lerpedY = this.camera.y));
              },
            },
            {
              key: 'pauseScale',
              value: function () {
                this.setState({
                  canScale: !1,
                  canUpdateCursor: !1,
                  canReorder: !1,
                });
              },
            },
            {
              key: 'setupHomepageToDetailAnimation',
              value: function (t) {
                var l = this;
                this.setState({ homepageToDetailAnimation: !0 }),
                  t.length > this.gridItems.length &&
                    (t.length = this.gridItems.length - 1);
                var u = this.currentClickedItem,
                  e = this.gridItems.findIndex(function (t) {
                    return t.uid === u.uid;
                  }),
                  d = t.findIndex(function (t) {
                    return t.url === u.imageUrl;
                  }),
                  i = Y(
                    this.viewport.margin,
                    this.viewport.width - this.viewport.margin,
                    u.x
                  ),
                  s = Y(
                    this.viewport.margin,
                    this.viewport.height - this.viewport.margin,
                    u.y
                  );
                (u.isClickedItem = !0),
                  (u.transitionIndex = d),
                  (u.scale = u.lerpedScale.x);
                var a = u.initialHeight / this.height;
                if (u.initialWidth / a > this.width) {
                  var n = this.width * a,
                    r = n / u.initialWidth;
                  (u.lerpedAnimationWidth = u.initialWidth),
                    (u.lerpedAnimationHeight = u.initialHeight),
                    (u.tweenTransitionSize = S.gsap.to(u, {
                      lerpedAnimationWidth: n,
                      lerpedAnimationHeight:
                        n / (u.initialWidth / u.initialHeight),
                      scale: u.scale / r,
                      duration: 0.5,
                    }));
                } else
                  (u.lerpedAnimationWidth = u.initialWidth),
                    (u.lerpedAnimationHeight = u.initialHeight);
                var o = (this.isTouch ? 514 : 685) / u.dimensions.height,
                  h = 0.5 * ((u.dimensions.height * o) / u.initialHeight);
                (u.tweentransitionCenter = S.gsap.to(u, {
                  duration: 1.2,
                  scale: h,
                  delay: 1.4,
                  ease: S.Cubic.easeInOut,
                })),
                  (this.clickItem = u);
                for (var m = [], c = 1; m.length < t.length; ) {
                  var p = this.gridItems.length - c;
                  m.includes(p) || p === e || m.push(p), c++;
                }
                (this.TL.GridItemsOut = new S.gsap.timeline({
                  paused: !0,
                  onComplete: function () {
                    l.onHiddenTimer = S.gsap.delayedCall(0.6, function () {
                      l.onHidden();
                    });
                  },
                })),
                  t.forEach(function (t, e) {
                    if (e === d) return !1;
                    var i = l.gridItems[m[e]],
                      s = l.isTouch ? 514 : 685,
                      a = s / t.dimensions.height;
                    (i.isTransitioningToDetail = !0),
                      (i.transitionDimensions = {
                        width: t.dimensions.width * a,
                        height: s,
                      });
                    var n = t.image_max_width;
                    (n = n && +n) && 100 < n && (n = 100),
                      n && n < 60 && (n = 60),
                      n && (n /= 100),
                      (n = n || 1),
                      l.isTouch && (n = 1);
                    var r = 0.9 * l.height,
                      o = i.transitionDimensions.height / r,
                      h = i.transitionDimensions.width / o;
                    if (h > l.width * n) {
                      var c = (l.width * n) / h;
                      i.transitionDimensions = {
                        width: i.transitionDimensions.width * c,
                        height: i.transitionDimensions.height * c,
                      };
                    }
                    (i.lerpedAnimationWidth = i.initialWidth),
                      (i.lerpedAnimationHeight = i.initialHeight),
                      (i.transitionColor = t.backgroundColor || '#FFFACD'),
                      (i.transitionOpacity = 0),
                      (i.transitionIndex = e),
                      (i.scale = i.lerpedScale.x),
                      l.TL.GridItemsOut.to(
                        i,
                        {
                          lerpedAnimationWidth: i.transitionDimensions.width,
                          lerpedAnimationHeight: i.transitionDimensions.height,
                          duration: 1.2,
                          scale: 0.5,
                          ease: S.Cubic.easeInOut,
                        },
                        0
                      ),
                      l.TL.GridItemsOut.to(
                        i,
                        {
                          transitionOpacity: 1,
                          duration: 0.6,
                          ease: S.Cubic.easeIn,
                        },
                        0
                      ),
                      l.TL.GridItemsOut.to(
                        i,
                        {
                          x: u.x,
                          y: u.y,
                          duration: 1.2,
                          ease: S.Cubic.easeInOut,
                        },
                        0.8 + 0.4 * Math.random()
                      );
                  }),
                  this.TL.GridItemsOut.play(0),
                  this.gridItems.forEach(function (t) {
                    t.isTransitioningToDetail ||
                      t.isClickedItem ||
                      ((t.isTransitioningOut = !0),
                      (t.lerpedAnimationWidth = t.initialWidth),
                      (t.lerpedAnimationHeight = t.initialHeight),
                      (t.transitionIndex = 9999),
                      (t.scale = t.lerpedScale.x),
                      (t.filterTween = S.gsap.to(t, {
                        opacity: 0,
                        scale: 0.14,
                        duration: 0.6,
                        delay: 0.3 * Math.random(),
                        ease: S.Cubic.easeIn,
                      })));
                  }),
                  (this.tweenCamera = S.gsap.to(this.camera, {
                    x: i - this.width / 2,
                    y: s - this.height / 2,
                    duration: 1.2,
                    delay: 0.6,
                    ease: S.Cubic.easeInOut,
                  })),
                  S.gsap.delayedCall(0.8, function () {
                    l.reorderArrayBasedOnTransitionIndex();
                  });
              },
            },
            {
              key: 'getTallestHeightForTransition',
              value: function () {
                var i = this,
                  s = 0;
                return (
                  this.gridItems.forEach(function (t) {
                    if (t.isTransitioningToDetail || t.isClickedItem) {
                      var e =
                        t.lerpedAnimationHeight *
                        t.lerpedScale.y *
                        i.scaleRatioWidth;
                      s <= e && (s = e);
                    }
                  }),
                  Math.round(1e3 * s) / 1e3
                );
              },
            },
            {
              key: 'reorderArrayBasedOnDistance',
              value: function (t) {
                t.sort(function (t, e) {
                  return t.distance < e.distance
                    ? 1
                    : t.distance > e.distance
                    ? -1
                    : 0;
                });
              },
            },
            {
              key: 'reorderArrayBasedOnTransitionIndex',
              value: function () {
                this.gridItems.sort(function (t, e) {
                  return t.transitionIndex < e.transitionIndex
                    ? 1
                    : t.transitionIndex > e.transitionIndex
                    ? -1
                    : 0;
                });
              },
            },
            {
              key: 'distance',
              value: function (t, e, i, s) {
                return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - s, 2));
              },
            },
            {
              key: 'onResize',
              value: function (t) {
                var e = t.width,
                  i = t.height;
                (this.width = e), (this.height = i);
                var s = (this.width - 1200) / 800;
                (this.scaleRatioWidth = Math.min(
                  Math.max(0.8 + 0.2 * s, 0.2),
                  1
                )),
                  (this.camera.width = this.width),
                  (this.camera.height = this.height),
                  (this.viewport.width = 1.5 * this.width),
                  (this.viewport.width = Math.min(
                    Math.max(1.5 * this.width, 1800),
                    3e3
                  )),
                  (this.viewport.height = Math.min(
                    Math.max(1.5 * this.height, 1140),
                    2160
                  )),
                  (this.viewport.margin = 200 * this.scaleRatioWidth),
                  this.isTouch &&
                    ((this.viewport.width = 1.5 * this.width),
                    (this.viewport.height = 1.2 * this.height),
                    (this.viewport.margin = 100)),
                  this.canvas &&
                    (this.isRetina || this.isTouch
                      ? ((this.canvas.width = 2 * this.width),
                        (this.canvas.height = 2 * this.height))
                      : ((this.canvas.width = this.width),
                        (this.canvas.height = this.height)),
                    (this.canvas.style.width = this.width + 'px'),
                    (this.canvas.style.height = this.height + 'px'));
              },
            },
            {
              key: 'dispose',
              value: function () {
                document.removeEventListener(
                  'mouseenter',
                  this.handlers.mouseEnter
                ),
                  document.removeEventListener(
                    'mouseleave',
                    this.handlers.mouseLeave
                  ),
                  this.el.removeEventListener(
                    'mousemove',
                    this.handlers.onMouseMove
                  ),
                  this.el.removeEventListener(
                    'touchmove',
                    this.handlers.onTouchMove
                  ),
                  this.el.removeEventListener(
                    'touchstart',
                    this.handlers.touchStart
                  ),
                  this.el.removeEventListener(
                    'touchend',
                    this.handlers.touchend
                  ),
                  window.cancelAnimationFrame(this.raf),
                  this.canScaleIntroTimer && this.canScaleIntroTimer.kill(),
                  this.canMoveIntroTimer && this.canMoveIntroTimer.kill(),
                  this.canScaleQuickIntroTimer &&
                    this.canScaleQuickIntroTimer.kill(),
                  this.canReorderQuickIntroTimer &&
                    this.canReorderQuickIntroTimer.kill(),
                  this.onHiddenTimer && this.onHiddenTimer.kill(),
                  this.touchStartTimer && this.touchStartTimer.kill(),
                  p()(d()(n.prototype), 'dispose', this).call(this);
              },
            },
          ]),
          n
        );
      })(x.a);
      function W(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      var E = (function (t) {
        function i(t) {
          var e;
          return (
            r()(this, i),
            ((e = l()(this, d()(i).call(this, t))).ComponentClass = D),
            e
          );
        }
        return (
          v()(i, t),
          h()(i, [
            {
              key: 'initData',
              value: function () {
                this.data.collections.forEach(function (e) {
                  e.images = e.images.map(function (t) {
                    return (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? W(i, !0).forEach(function (t) {
                              a()(e, t, i[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(i)
                            )
                          : W(i).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(i, t)
                              );
                            });
                      }
                      return e;
                    })({}, t, {
                      title: e.title,
                      category: e.category,
                      urlDetail: e.url,
                    });
                  });
                }),
                  p()(d()(i.prototype), 'initData', this).call(this);
              },
            },
          ]),
          i
        );
      })(f.a);
      e.default = E;
    },
    wTVA: function (t, e) {
      t.exports = function (t) {
        if (Array.isArray(t)) return t;
      };
    },
    wkBT: function (t, e) {
      t.exports = function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
    },
  },
]);

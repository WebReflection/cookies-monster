(function (window, byId) {
  // by Andrea Giammarchi - WTFPL
  var
    cookieName = byId + '-accepted',
    id = '#' + byId,
    link = id + ' .' + cookieName,
    CN = 'className',
    CLICK = 'click',
    HIDDEN = 'hidden',
    MOUSEWHEEL = 'mousewheel',
    SCROLL = 'scroll',
    document = window.document,
    location = window.location,
    st = window.setTimeout,
    ct = window.clearTimeout,
    delay = 350,
    $ = function (css) {
      return document.querySelector(css);
    },
    add = function (where, which, what) {
      where.addEventListener(which, what, !where);
    },
    remove = function (where, which, what) {
      where.removeEventListener(which, what, !where);
    },
    drop = function (el) {
      el.parentNode.removeChild(el);
    },
    hide = function (evt) {
      var el = $(id);
      ct(t);
      if (el) {
        remove(window, MOUSEWHEEL, hide);
        remove(window, SCROLL, hide);
        el[CN] += ' ' + HIDDEN;
        st(drop, delay, el);
        el = $(link);
        if (el) {
          if (evt.type === CLICK) {
            set(evt.preventDefault());
          }
          remove(el, CLICK, hide);
        }
      }
    },
    set = function () {
      var d = new Date();
      d.setFullYear(d.getFullYear() + 1);
      document.cookie = ''.concat(
        cookieName, '=1',
        ';expires=', d.toGMTString(),
        ';path=/',
        ';domain=.', location.hostname,
        location.protocol === 'https' ? ';secure' : ''
      );
    },
    show = function () {
      var el = $(id);
      if (el) {
        if (document.cookie.indexOf(cookieName) < 0) {
          t = st(function () {
            t = 0;
            add(window, MOUSEWHEEL, hide);
            add(window, SCROLL, hide);
          }, delay * 10);
          el[CN] = el[CN].replace(HIDDEN, '');
          el = $(link);
          if (el) {
            add(el, CLICK, hide);
          }
        } else {
          set(drop(el));
        }
      } else {
        t = st(show, delay);
      }
    },
    t = st(show, delay)
  ;
}(window, 'cookies-monster'));
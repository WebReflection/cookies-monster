/*!
Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
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
      var el = $(id), a, d;
      if (el) {
        remove(window, MOUSEWHEEL, hide);
        remove(window, SCROLL, hide);
        a = $(link);
        if (a) {
          if (evt.type === CLICK) {
            evt.preventDefault();
          }
          remove(a, CLICK, hide);
        }
        d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        document.cookie = ''.concat(
          cookieName, '=1',
          ';expires=', d.toGMTString(),
          ';path=/',
          ';domain=.', location.hostname,
          location.protocol === 'https' ? ';secure' : ''
        );
        el[CN] += ' ' + HIDDEN;
        st(drop, delay, el);
      }
    },
    show = function (evt) {
      var el = $(id), a;
      if (document.cookie.indexOf(cookieName) < 0) {
        if (el) {
          add(window, MOUSEWHEEL, hide);
          add(window, SCROLL, hide);
          a = $(link);
          if (a) add(a, CLICK, hide);
          el[CN] = el[CN].replace(HIDDEN, '');
        }
      } else if (el) {
        drop(el);
      } else {
        st(show, delay);
      }
    }
  ;
  st(show, delay);
}(window, 'cookies-monster'));
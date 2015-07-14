//remove:
//:remove

wru.test([
  {
    name: 'visibility',
    test: function () {
      document.cookie = 'cookies-monster-accepted=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
      setTimeout(wru.async(function () {
        var el = document.getElementById('cookies-monster');
        wru.assert(el.className.indexOf('hidden') <  0);
      }), 950);
    }
  }, {
    name: 'disappear',
    test: function () {
      var e = document.createEvent('Event');
      e.initEvent('click', true, true);
      document.getElementById('cookies-monster').getElementsByTagName('a')[0].dispatchEvent(e);
      setTimeout(wru.async(function () {
        var el = document.getElementById('cookies-monster');
        wru.assert(!el);
      }), 450);
    }
  }
]);

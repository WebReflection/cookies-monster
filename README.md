cookies-monster
===============

[![build status](https://secure.travis-ci.org/WebReflection/cookies-monster.svg)](http://travis-ci.org/WebReflection/cookies-monster)

# A Simplified EU Cookie Law Approach

The aim of this project is to simplify through an agnostic, drop in based approach, the handling of the infamous EU Cookie banner.
Supporting separation of concerns, this project offers an extremely compact and widely compatible JavaScript logic
which will take care of:

  * showing the banner only if the user has not accepted it explicitly
  * disappearing on scroll automatically after at least 3 seconds
  * adding and removing CSS classes to give Web Developers full style-ability
  * cookie for a year, renewed each time ( forever accepted )

Following an example on how to use files provided in the [./build](build/) folder.



### The JS part

Whenever a user clicks `Accept`, the banner disappears for a year and for the whole domain.

It also disappears, after about 3 seconds, as soon as the user scrolls the page.
However, in latter case, it will be shown next time, unless the user made an explicit choice through the `Accept` button.



### The CSS part

The [current file](src/cookies-monster.css) is just an example of how such banner could be styled.
Be sure you have defined both `#cookies-monster` and `#cookies-monster.hidden` behaviors, and feel free to style its optional link element which by default should have  a `.cookies-monster-accepted` class.



### The HTML part

It can be anything you want, as long as the container id is `cookies-monster`. You might need to specify a link to know more.
Please be sure what you provide is useful and meaningful enough, accordingly with the law expectations.
Just as basic example, this is a generic element.

```html
<div id="cookies-monster" class="hidden">
  This sites uses cookies. <a
    class="cookies-monster-accepted"
    href="#cookies-monster"
  >Accept</a>
</div>
```

By default, the element should contain the class `hidden` plus eventually others.

**Please note** that if an element with class `.cookies-monster-accepted` is present, this will be used to set the cookie once clicked.



### How To

Following is the most basic layout you need. The script is not obtrusive and it can work within any layout already in production.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="styleSheet"
      href="//cdnjs.cloudflare.com/ajax/libs/cookies-monster/0.1.4/cookies-monster.css">
    <script async
      src="//cdnjs.cloudflare.com/ajax/libs/cookies-monster/0.1.4/cookies-monster.js"></script>
  </head>
  <body>
    <div id="cookies-monster" class="hidden">
      This sites uses cookies. <a
        class="cookies-monster-accepted"
        href="#cookies-monster"
      >Accept</a>
    </div>
  </body>
</html>
```

You can see a [live working example here](http://webreflection.github.io/cookies-monster/test/test.html)

Finally, a mandatory **special thanks to [cdnjs](https://cdnjs.com/)** for hosting this little js and css script.



### License

This project comes with a [WTFPL License](http://www.wtfpl.net/).



### Compatibility

The script is compatible with every Mobile and Desktop browser.
If you want to support IE9 and/or eventually IE8 too, use these comments on top of your pages head.

```html
<!--[if lte IE 9]><style>label{display:block !important;}</style><script>(function(f){window.setTimeout=f(window.setTimeout);window.setInterval=f(window.setInterval)})(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});</script><![endif]-->
<!--[if IE 8]><script src="//cdnjs.cloudflare.com/ajax/libs/ie8/0.2.5/ie8.js"></script><![endif]-->
```

After that you can include the script either deferred or async or however you like.

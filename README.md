cookies-monster
===============

[![build status](https://secure.travis-ci.org/WebReflection/cookies-monster.png)](http://travis-ci.org/WebReflection/cookies-monster)

# Simplified HTML, CSS, JS EU Cookie Law



### The JS part
Whenever a user clicks `Accept`, the banner disappears for a year and for the whole domain.

It also disappears as soon as the user scrolls the page but it will be shown until the user made an explicit choice.



### The CSS part
The [current file](src/cookies-monster.css) includes an  image, but it doesn't have to. It's just an example of what the script expect.

Be sure you have defined both `#cookies-monster` and `#cookies-monster.hidden` behaviors, and feel free to style its optional link element which by default should have  a `.cookies-monster-accepted` class.



### The HTML part
It can be anything you want, as long as the container id is `cookies-monster`. You might need to specify a link to know more: it's up to you and I am not responsible for anything wrong you could write in the element. Just as basic example, this is a generic element.

```html
<div id="cookies-monster" class="hidden">
  This sites uses cookies. <a
    class="cookies-monster-accepted"
    href="#cookies-monster"
  >Accept</a>
</div>
```

By default, the element should contain the class `hidden` plus eventually others.

**Please note** that if an element with class `.cookies-monster-accepted` is present, this will be used to set the  cookie once clicked.



### Compatibility

The script is compatible with every Mobile and Desktop browser.
If you want to support IE9 and/or eventually IE8 too, use these comments on top of your pages head.

```html
<!--[if lte IE 9]><style>label{display:block !important;}</style><script>(function(f){window.setTimeout=f(window.setTimeout);window.setInterval=f(window.setInterval)})(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});</script><![endif]-->
<!--[if IE 8]><script src="//cdnjs.cloudflare.com/ajax/libs/ie8/0.2.5/ie8.js"></script><![endif]-->
```

After that you can include the script either deferred or async or however you like.

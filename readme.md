Minimalistic version of Baron without accordeon headers support.

Features:

- Does not replace native system scroll mechanic.
- Customizable scrollbar design with full CSS support.
- No strong dependences on jQuery.

Baron just hides system scrollbar, but doesn't remove it. This can guarantee scroll work on any system where CSS property 'overflow: scroll' is supported.

##Simple usage

To start using baron.js go throught following steps:

* Include dev or min version of baron.js:

```js
<script src="baron.js"></script>
```

* Make some html:

```html
<div class="wrapper">
    <div class="scroller">
        <div class="container">
        	Your scrollable content here
        </div>
        <div class="scroller__bar"></div>
    </div>
</div>
```

* And some CSS:

```css
.wrapper {
    position: relative;
    overflow: hidden;
}
.scroller {
    height: 100%;
    overflow-y: scroll;
}
.scroller::-webkit-scrollbar { /* Preventing webkit bug of horizontal scrolling */
    width: 0;
}
.scroller__bar { /* The bar. You should define width, right and background */
    position: absolute;    
    z-index: 1;
    right: 0;
    width: 10px;
    background: #999;
}
.container { /* Data wrapper */
    overflow: hidden; /* For possible margin collapse removing */
}
```

Note: you can choose any class names, and slylize them as you want.

* Initialize baron:

```js
baron($('.wrapper'), {
    scroller: '.scroller',
    container: '.container',
    bar: '.scroller__bar'
});
```

There can be many wrappers on page, but only first scroller, container and scroller__bar on each wrapper will be initialized. Also, make sure you have either jQuery or custom DOM, events and selector engines.

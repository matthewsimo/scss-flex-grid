Reflex.gs
===

Advanced, highly customizable, cross-browser, responsive grid system, supercharged with flexbox.


## Overview

Reflex.gs is built following the principle of _progressive enhancement_. It is actually a solid grid implementation that upgrades to flex if the browser has specific support View the demo [here](http://loup-brun.github.io/reflex.gs/demo/no-flex.html)

### How it works

The default layout runs on floats. [Modernizr](http://modernizr.com/) (an awesome feature detection library) adds a class to the `html`, which enables `flex` on rows and columns. You can specify a bunch of flex-related properties, but they won't be effective unless you specify `display: flex` on the element. This is what we're doing with Modernizr.

If you had a look at the code, you might notice that we're not targeting flexbox support directly (we're testing against the support for `flex-wrap` instead). Indeed, browser support is, at the moment, [pretty good](http://caniuse.com/#feat=flexbox). However, if you have a closer look at the support details, you'll notice that a great deal of browsers actually supporting the `display: flex` property _don't_ support wrapping. This means that unlike floats, your columns will not be pushed down if their total width exceeds that of the container &mdash; they will overflow the container.

## Features

- Built on [sass](http://sass-lang.com)
- Responsive, mobile-first approach
- Ultra customizable (see the usage section below for more information)
- Packaged with sass mixins for the flex properties, containing all the correct vendor prefixes (including prefixes for the [old spec](https://css-tricks.com/old-flexbox-and-new-flexbox/))
- Includes offsets
- Flex columns (smart columns that take up the remaining space)
- Supports IE8+ (basic grid) and all major browsers (Chrome, FF, Opera, Safari)

## Usage

Check the source code (under `src/`) and treat your own project as the `main.scss` file. Or, you can drop in the compiled css found in the `dist/` directory. [Download Reflex.gs](https://github.com/loup-brun/reflex.gs/archive/master.zip)

### Class Reference
	
- `.row`: flex container, must be used wrap columns (also has the clearfix for floating columns).
- `.col col-{namespace}`: this creates a column that will grow/shrink depending on available space in the defined namespace (flex-only supported feature).
- `.col col-{namespace}-{number}`: this creates a column that span the specific number of columns in the defined namespace. Valid numbers are (e.g.) 1-12.
- `.off-{namespace}-{number}`: this will offset a column by a specific number of columns in the defined namespace. Valid numbers are (e.g.) 1-11.

Default valid namespaces are `xs`, `sm`, `md`, `lg`. The `xs` namespace is default and uses no media queries. Learn how to [override namespaces](#overriding-namespaces).

### Overriding Namespaces &amp; Variables

Configuration may be achieved by changing the values in the `_rflx.variables.scss` file. Reflex.gs declares a variable `$bp-namespace-obj` (a [sass map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps)). This variable defines the _breakpoints_ that you'd like to set and their associated namespaces.

Default configuration:

```scss
// `_rflx.variables.scss`
$number-of-columns: 12;
$gutter-width: 20px;
$bp-namespace-obj: (
  (xs),
  (sm, 768px),
  (md, 992px),
  (lg, 1200px)
);
```
You can add your own namespaces and breakpoints, the grid can accept as many as you give it. Reflex.gs is built from a mobile first approach, meaning you should always keep your base namespace first, this will ensure that the others cascade over it correctly.

### Compiling

Compiling with sass is fairly easy. To start developing on your own, the project uses [Grunt](http://gruntjs.com) to automate everything. Make sure you have [npm](https://www.npmjs.com/) installed (and [sass](http://sass-lang.com/), of course!).

```
$ npm install      // install all the build files
$ grunt dev        // regenerate the files when changed
```

When you're ready, you can run `grunt dist` to build the minified `css` output.

To push a new version, run `grunt version::patch` (x.y.**Z**), `grunt version::minor` (x.**Y**.z) or `grunt version::major` (**X**.y.z). This updates your `package.json` file as well as the version included in the stylesheet header.

### Notes:

- Use of mixins to include all the vendor prefixes you will need! **Keep in mind** however that many browsers that support `display: flex` don't support wrapping (the `flex-wrap` property). In other words, your grid is not responsive in those browsers! Rows span wider than the screen and don't wrap as floating columns do. There is an alternative approach to use flexbox as an enhancement - check out the [demo](http://loup-brun.github.io/reflex.gs/demo/no-flex.html).
- Heavy use of sometimes not often used Sass @ directives, be sure and consult the [Sass docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) if something looks foreign.


### Coming Up:

- Do a better demo page
- ~~Implement this project as an enhancement of a regular float grid~~ - [YO, check it out!](http://loup-brun.github.io/reflex.gs/demo/no-flex.html)

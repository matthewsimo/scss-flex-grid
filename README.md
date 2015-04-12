Reflex.gs
===

Advanced, highly customizable, cross browser grid system, supercharged with flexbox.


### Features:

- Responsive, mobile first approach
- Progressive enhancement: a default grid with floats is provided, and browsers with specific support get a flex grid
- Define specific colum size or use a flex column (a column that grows to fill space)
- Define offset to push column a specific number of columns
- Define your own grid - 8, 12, 16, 24... you chose!

### Usage:

Go to the `src/` directory and grab the `_rflx.grid.scss` file. You'll also have to include the contents of `_rflx.variables.scss` and `_rflx.mixins.scss`, which you would usually have in your own project partials.

You could start your project from scratch using the suggested file structure: `main.scss` in the `src/` directory is ready to go.

### Reference:

- `.row`: Flex box container, use this to wrap columns.
- `.col-(namespace)`: This creates a column that will grow/shrink depending on available space in the defined namespace.
- `.col-(namespace)-(number)`: This creates a column that span the specific number of columns in the defined namespace. Valid numbers are 1-12.
- `.off-(namespace)-(number)`: This will offset a column by a specific number of columns in the defined namespace. Valid numbers are 1-11.

Valid namespaces are `xs`, `sm`, `md`, `lg`. The `xs` namespace is default and uses no media queries.

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

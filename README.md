scss-flex-grid
==============

*If you need a true grid system, I recommend using CSS Grid Layout. It's support is good enough for modern sites and applications. As such, I will no longer be spending any time maintaining this project. ✌️*


grid using flex box &amp; scss
Version: `0.3.5`

Super simple, straight forward flex grid implementation. Check out the [demo](http://matthewsimo.github.io/scss-flex-grid/).


### Features:

- Responsive, mobile first approach
- Define specific colum size or use a flex column (a column that grows to fill space)
- Define offset to push column a specific number of columns.
- Easily resetting offsets by namespace.
- Set your own number of columns!
- Set your own class names for rows, columns and offsets for nice library compatibilty!

### Usage:

##### NPM Method

- `npm install scss-flex-grid`
- `@import "../node_modules/scss-flex-grid/flex-grid";`


##### Ye Old download/git clone method

- Just `@import` the `_flexgrid.scss` file as a partial or rename (`_flexgrid.scss -> flexgrid.scss`) if you'd prefer it to be compiled independently.

---

Use the generated classes to build your layout. I prefer to keep my markup clean and `@extend` the grid classes onto my elements so I don't have to muck around in html for style edits but whatever floats your boat.

### Variables:

- `$fg-columns`: The number of columns you wnat your grid to be, defaults to 12
- `$fg-gutter`: The gutter width used for each column, defaults to 0.5rem
- `$fg-breakpoints`: The Flex Grid breakpoint object, binds grid namespaces to media queries. Read more about namespaces in the next section. Defaults to `((xs),(sm,768),(md,992px),(lg,1200px))`.
- `$fg-class-row`: The class to use for rows, defaults to 'row'
- `$fg-class-col`: The class to use for columns, defaults to 'col'
- `$fg-class-off`: The class to use for offsets, defaults to 'off'


### Reference:

- `.($fg-class-row)`: Flex box container, use this to wrap columns.
- `.($fg-class-col)-(namespace)`: This creates a column that will grow/shrink depending on available space in the defined namespace.
- `.($fg-class-col)-(namespace)-(number)`: This creates a column that span the specific number of columns in the defined namespace. Default valid numbers are 1-12.
- `.($fg-class-off)-(namespace)-(number)`: This will offset a column by a specific number of columns in the defined namespace. Default valid numbers are 1-11.
- `.($fg-class-off)-(namespace)-reset`: This will reset a column's offset for the given and larger namespaces.

See docs about the row, col and offset class name variables, default is 'row', 'col', 'off'.

Valid namespaces are `xs`, `sm`, `md`, `lg`. The `xs` namespace is default and uses no media queries.

### Coming Up:

- Dunno, considering ideas.. But they _must_ adhere to the super simple approach.

### Notes:

- Heavy use of sometimes not often used Sass @ directives, be sure and consult the [Sass docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) if something looks foreign.
- This is for personal use, if you like and want to use it, great! But I want to keep it simple so if you have an idea feel free to add an issue but don't be upset if I don't accept a pull request. :heart: (That's what forks are for!)
- This purposefully doesn't account for any browser prefixes, be sure and use [Autoprefixer](https://github.com/postcss/autoprefixer).

### Contributing:

- Report bugs by opening a new issue
- Have an idea? Open an issue and we can discuss it.
- If you want to contribute some code, that's great! Open an issue for discussion first.
- The main goal for this project is be super simple. The _only_ requirement for users for this project will be sass, that won't change. No crazy build steps or unnecessary fluff, thanks.


### Related:

[David Gómez](https://github.com/davegomez) has based his [Unistyle Flex Grid](https://github.com/davegomez/unistyle-flex-grid) off of this project, check it out if you're into that sort of thing. 😀


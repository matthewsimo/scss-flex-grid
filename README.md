scss-flex-grid
==============

12 column grid using flex box &amp; scss


Super simple, straight forward 12 column grid implementation.


### Features:

- Responsive, mobile first approach
- Define specific colum size or use a flex column (a column that grows to fill space)
- Define offset to push column a specific number of columns.

### Usage:

Just `@import` the `_flexgrid.scss` file as a partial or rename (`_flexgrid.scss -> flexgrid.scss`) if you'd prefer it to be compiled independently.

Use the generated classes to build your layout. I prefer to keep my markup clean and `@extend` the grid classes onto my elements so I don't have to muck around in html for style edits but whatever floats your boat.

### Reference:

- `.row`: Flex box container, use this to wrap columns.
- `.col-(namespace)`: This creates a column that will grow/shrink depending on available space in the defined namespace.
- `.col-(namespace)-(number)`: This creates a column that span the specific number of columns in the defined namespace. Valid numbers are 1-12.
- `.off-(namespace)-(number)`: This will offset a column by a specific number of columns in the defined namespace. Valid numbers are 1-11.

Valid namespaces are `xs`, `sm`, `md`, `lg`. The `xs` namespace is default and uses no media queries.

### Coming Up:

- Plan on doing a proper demo. Stay tuned.

### Notes:

- Heavy use of sometimes not often used Sass @ directives, be sure and consult the [Sass docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) if something looks foreign.
- This is for personal use, if you like and want to use it, great! But I want to keep it simple so if you have an idea feel free to add an issue but don't be upset if I don't accept a pull request. :heart: (That's what forks are for!)


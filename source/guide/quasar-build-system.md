title: Quasar Build System
---
The App must be built before deployment. Read more how to build (and test) in the [CLI Commands](/guide/cli-commands.html#Build-App) section.

Following lines will describe how everything is glued together.

## Source Files

### Javascript Files
Javascript files are glued together using [Webpack](http://webpack.github.io/docs/). So you can use *require()* -- and *require.resolve()* -- for modularity. You must adhere to the [CommonJS format](/guide/commonjs-format.html) because of its many advantages when writing *.js* files.

Take into consideration that the following files are taken as Webpack entry-points (take a good look at folders):
* /js/*.js (Note: directly under /js; no sub-folders)
* /pages/*page-name*/script.*page-name*.js
* /layouts/*layout-name*/layout.*layout-name*.js

> **NOTE**
> Subfolders should be used to modularize your JS code.

### CSS Files
Notice that all CSS files are built using [Stylus](https://learnboost.github.io/stylus/), so they have the *.styl* extension. The Stylus NIB extension is also available.

Take into consideration that the following files are taken as Stylus entry-points (take a good look at folders):
* /css/*.styl (Note: directly under /css; no sub-folders)
* /pages/*page-name*/css/*file-name*.styl
* /layouts/*layout-name*/layout.*layout-name*.styl

> **NOTE**
> You can speed up build time when developing by forcing only one theme rather than build all. See [forceTheme](/guide/quasar-app-configuration.html#‘forceTheme’-String) property in [App Configuration](/guide/quasar-app-configuration.html).

> **NOTE**
> Subfolders should be used to modularize your CSS code.

### Image Files
Image files should be placed under `assets` folders. By default, on a production build, `GIF`, `JPEG`, `PNG` and `SVG` image files get "minified" without losing noticeable quality.

### HTML Files
When building for Production, HTML files are minified.

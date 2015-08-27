# Laravel Elixir Modernizr

Laravel Elixir **3.0+** extension that uses [gulp-modernizr](https://github.com/doctyper/gulp-modernizr)
to crawl your app and build a custom [Modernizr](http://modernizr.com/) file with only the tests
you're actually using.

## Install

```
npm install laravel-elixir-modernizr --save-dev
```

Throw it into your Elixir mix:

```javascript
var Elixir = require('laravel-elixir');

require('laravel-elixir-modernizr');

Elixir(function(mix) {
    ...
    mix.modernizr();
    ...
});
```

## Options

### Sources

Array of globs to scan for Modernizr tests.

**Default:** Assuming default Elixir paths, it would scan `public/js/**/*.js` and `public/css/**/*.css`.

### Output

Directory path and file name of generated build file.

**Default:** Assuming default Elixir JS output path, the file will be placed at `public/js/vendor/modernir-custom.js`.

### Customizr options

`gulp-modernizr` passes options to [Customizr](https://github.com/doctyper/customizr). You can see them [here](https://github.com/doctyper/customizr#config-file).

## All credit goes to

* [doctyper](https://github.com/doctyper) for his awesome [Customizr](https://github.com/doctyper/customizr) tool
* His [gulp-modernizr](https://github.com/doctyper/gulp-modernizr) Gulp wrapper.
* All contributors to the [Laravel Elixir](https://github.com/laravel/elixir) project.

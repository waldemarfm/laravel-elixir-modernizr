var gulp      = require('gulp'),
    modernizr = require('gulp-modernizr')
;

var Elixir = require('laravel-elixir')
      Task = Elixir.Task,
         $ = Elixir.Plugins,
    config = Elixir.config
;

Elixir.extend('modernizr', function(src, output, options) {
    var paths = new Elixir.GulpPaths()
        .src(src || [config.get('public.css.outputFolder') + '/**/*.css', config.get('public.js.outputFolder') + '/**/*.js'])
        .output(output || config.get('public.js.outputFolder') + '/vendor/modernizr-custom.js')
    ;

    new Task('modernizr', function() {
        this.log(paths.src, paths.output);

        // Exclude previous build files from being crawled
        paths.src.path.push('!' + paths.output.path);

        return gulp.src(paths.src.path)
            .pipe(modernizr(paths.output.name, options || {}))
            .pipe($.if(config.production, $.uglify()))
            .pipe(gulp.dest(paths.output.baseDir));
    });
});

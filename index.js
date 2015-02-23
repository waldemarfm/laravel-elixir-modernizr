var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities'),
    modernizr = require('gulp-modernizr'),
    uglify = require('gulp-uglify'),
    _  = require('underscore')
;

elixir.extend('modernizr', function (filename, options) {

    var config = this;
        defaultOptions = {
            src: ['public/css/**/*.css', 'public/js/*.js'],
            output: config.jsOutput + '/vendor',
        }
    ;

    if (typeof filename === "undefined") {
        filename = 'modernizr.js';
    }

    options = _.extend(defaultOptions, options);

    gulp.task('modernizr', function () {
        return gulp.src(options.src)
            .pipe(modernizr(filename, options))
            .pipe(uglify())
            .pipe(gulp.dest(options.output))
        ;
    });

    return this.queueTask('modernizr');
});

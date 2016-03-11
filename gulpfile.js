'use strict';

let gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    Server = require('karma').Server,
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache'),
    addsrc = require('gulp-add-src'),
    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });

let paths = {
    sources: 'src/**/*.js',
    views: 'src/**/*.html',
    less: 'src/**/*.less'
};

gulp.task('lint', function() {
    return gulp.src(paths.sources)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', ['lint', 'build'], function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('buildJs', function() {
    let stream = gulp.src(paths.views)
        .pipe(templateCache({
            standalone: true,
            module: 'angular.lst.rating.ui.templates',
            root: 'lst/ui/templates/',
            moduleSystem: 'IIFE'
        }))
        .pipe(addsrc(paths.sources))
        .pipe(ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('angular-lst-rating.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('angular-lst-rating.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

    return stream;
});

gulp.task('less', function () {
  return gulp.src(paths.less)
      .pipe(less({
        plugins: [cleancss]
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task('build',['buildJs', 'less']);

gulp.task('default', ['test']);
 


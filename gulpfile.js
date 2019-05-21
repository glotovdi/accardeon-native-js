var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  html: ['src/index.html'],
  css: ['src/styles/*.scss'],
  script: ['src/scripts/*.js']
};

gulp.task('mincss', function() {
  return gulp
    .src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'))
    .pipe(reload({ stream: true }));
});

gulp.task('html', function() {
  gulp
    .src(paths.html)
    .pipe(gulp.dest('dist'))
    .pipe(reload({ stream: true }));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('scripts', function() {
  return gulp
    .src(paths.script)
    .pipe(gulp.dest('dist'))
    .pipe(reload({ stream: true }));
});

gulp.task('watcher', function() {
  gulp.watch(paths.css, ['mincss']);
  gulp.watch(paths.script, ['scripts']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('prepare', function() {
  gulp.start('mincss'), gulp.start('scripts'), gulp.start('html');
});

gulp.task('default', ['prepare', 'watcher', 'browserSync']);

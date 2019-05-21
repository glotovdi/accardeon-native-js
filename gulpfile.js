var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp
    .src('./project/**/*.scss')
    .pipe(
      sass({
        includePaths: require('node-normalize-scss').includePaths
      })
    )
    .pipe(gulp.dest('./project'))
    .pipe(sass({ includePaths: ['./project'] }));
});

gulp.task('sass:watch', function() {
  gulp.watch('./project/**/*.scss', ['sass']);
});

var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp
    .src('./project/styles/main.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('project/styles/'));
});

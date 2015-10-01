var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

// Scripts
gulp.task('scripts', function() {
   gulp.src(srcPath+'scripts/**/*.coffee')
    .pipe(coffee())
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(distPath+'scripts'));
});
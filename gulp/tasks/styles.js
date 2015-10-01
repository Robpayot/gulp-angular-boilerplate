var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass');

// Styles
gulp.task('styles', function() {
    gulp.src(srcPath+'styles/**/*.scss').pipe(compass({
            css: distPath+'styles',
            sass: srcPath+'styles/',
            image: 'img'
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(distPath+'styles'));
});
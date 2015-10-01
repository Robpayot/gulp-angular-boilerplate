var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// Browser sync
gulp.task('serve', function() {
    browserSync.init({
        server: "./"+distPath
    });
    gulp.watch(srcPath+'scripts/**/*.coffee', ['scripts']);
    gulp.watch(srcPath+'styles/**/*.scss', ['styles']);
    gulp.watch(srcPath+'views/**/*.html', ['views']);
    // gulp.watch(srcPath+'index.html', ['init']);
    // srcPath for views after compiling
    gulp.watch([srcPath+'views/**/*.html', distPath+'scripts/**/*.js', distPath+'styles/**/*.css']).on('change', reload);
});
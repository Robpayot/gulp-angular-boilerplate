var gulp = require('gulp'),
    wiredep = require('wiredep').stream;

// Bower files
gulp.task('bower', function() {
  // Inject bower dependencies in index.html file
  gulp.src(distPath+'index.html')
        .pipe(wiredep({
            devDependencies: true
        }))
        .pipe(gulp.dest(distPath));
});
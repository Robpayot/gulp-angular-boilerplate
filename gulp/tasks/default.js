var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Default task
gulp.task('default', function() {

    runSequence(['init', 'views', 'scripts', 'styles', 'libs'], ['bower', 'serve']);
    
});
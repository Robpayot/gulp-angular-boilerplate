var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Default task
gulp.task('default', function() {

    runSequence(['build', 'views', 'scripts', 'styles', 'libs'], ['bower', 'serve']);
    
});
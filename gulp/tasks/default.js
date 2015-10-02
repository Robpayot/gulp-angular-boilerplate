var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Default task
gulp.task('default', function() {

    runSequence(['bower'], ['views', 'scripts', 'styles', 'libs'], ['serve']);
    
});
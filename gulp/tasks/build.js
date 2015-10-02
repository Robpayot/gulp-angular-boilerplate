var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Default task
gulp.task('build', function() {

    runSequence(['index']);
    
});
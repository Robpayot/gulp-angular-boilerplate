var gulp = require('gulp');

gulp.task('libs', function() {
	gulp.src(srcPath+'libs/**/*')
		.pipe(gulp.dest(distPath+'libs'));

});
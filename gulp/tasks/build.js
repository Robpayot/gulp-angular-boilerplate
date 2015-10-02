var gulp = require('gulp');

gulp.task('build', function() {
	gulp.src(srcPath+'index.html')
		.pipe(gulp.dest(distPath));
});
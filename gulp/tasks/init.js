var gulp = require('gulp');

gulp.task('init', function() {
	gulp.src(srcPath+'index.html')
		.pipe(gulp.dest(distPath));
});
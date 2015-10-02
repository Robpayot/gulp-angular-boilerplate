var gulp = require('gulp');

gulp.task('index', function() {
	gulp.src(srcPath+'index.html')
		.pipe(gulp.dest(distPath));
});
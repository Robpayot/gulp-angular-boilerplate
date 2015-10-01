var gulp = require('gulp');

gulp.task('views', function() {
	gulp.src(srcPath+'views/**/*.html')
		.pipe(gulp.dest(distPath+'views'));

});
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('./app/assets/common/scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version'))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/assets/common/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('default', ['browserSync', 'sass'], function(){
	gulp.watch('app/assets/common/scss/**/*.scss', ['sass']);
	gulp.watch('app/assets/common/js/*.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
 	gulp.watch('app/assets/common/js/*.js', browserSync.reload);
});
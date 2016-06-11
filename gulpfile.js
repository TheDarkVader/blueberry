var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

// Compile our Sass into a css file
// Sends that file to css folder
gulp.task('sass', function() {
    return gulp.src('./library/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
   			browsers: ['last 2 versions'],
   			cascade: false,
            flexbox: true
		   }))
       .pipe(rename('style.css'))
       .pipe(gulp.dest('./'));
});

gulp.task('browserify', function(){
    gulp.src('./library/js/public.js')
        .pipe(browserify({
            debug : !gulp.env.production
        }))
        // .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('./library/js/build'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./library/scss/**/*.scss', ['sass']);
    gulp.watch('./library/js/**/*.js', ['browserify']);
});

// Default Task defult just allows you to write gulp
gulp.task('default', ['sass','watch']);

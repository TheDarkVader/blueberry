var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

    gulp.task('sass', function() {
        return gulp.src('./library/scss/*.scss')
            .pipe(sass())
            .pipe(autoprefixer({
       			browsers: ['last 2 versions'],
       			cascade: false,
                flexbox: true
    		   }))
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

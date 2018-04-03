//npm install --save-dev gulp gulp-uglify gulp-concat

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var sourcedir = "./Client/Scripts/*.js";
var tempfile = "./combined.min.js";
var destdir = "./Client/Scripts/Minified";

gulp.task("uglify", function () {
    return gulp.src([sourcedir])
        .pipe(concat(tempfile))
        .pipe(uglify({mangle: true}))
        .pipe(gulp.dest(destdir));
});
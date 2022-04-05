'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function build() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concatCss("styles.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/css'));
}

exports.build = build;
exports.default = build;
exports.watch = function() {
    gulp.watch('./src/sass/**/*.scss', gulp.series(build));
}



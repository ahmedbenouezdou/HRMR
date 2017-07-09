'use strict';

// Example
// gulp

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var bower = require('gulp-bower');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulpNgConfig = require('gulp-ng-config');
var ignore = require('gulp-ignore');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var open = require('gulp-open');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var vendor = require('gulp-concat-vendor');
var server = require('gulp-express');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('gulp-main-bower-files');
var file = require('gulp-file');
var runSequence = require('run-sequence');


gulp.task('default', function (callback) {
    runSequence( 'styles','scripts-vendor-concat','icons','index', callback);
});


gulp.task('icons', function() {
    return gulp.src(['./bower_components/bootstrap/fonts/**.*','./bower_components/font-awesome/fonts/**.*'])
        .pipe(gulp.dest('fonts'));
});

gulp.task('styles', function () {
    return gulp.src(['./bower_components/bootstrap/dist/css/*.min.css','./bower_components/morrisjs/*.css','./bower_components/angularjs-datepicker/dist/*.css','./bower_components/font-awesome/css/*.min.css'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css'))
        .pipe(notify({
            message: 'Styles task complete'
        }));

});

gulp.task('scripts-vendor-concat', function () {
    var filterJS = gulpFilter('**/*.js', { restore: true });

    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('js'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});


// Création du fichier index.html avec injection des js et css
gulp.task('index', function () {
    return gulp.src('index.html')
        .pipe(inject(gulp.src(['js/vendor.js','src/**/*.js', 'css/**/*.css'], {
            read: false
        }), {
            addRootSlash: false
        }))
        .pipe(gulp.dest('./'))
        .pipe(notify({
            message: 'Index task complete'
        }));
});
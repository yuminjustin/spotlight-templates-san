var gulp = require('gulp');
var replace = require('gulp-replace');
var uglyfly = require('gulp-uglyfly');
var cleanCSS = require('gulp-clean-css');
var config = require('./build/config');

var root = config.build.outputPathName;

gulp.task('replace', function () {

    gulp.src(root + '/static/js/*.js')
        .pipe(replace('.catch(', "['catch'](")) // 解决IE不兼容
        .pipe(uglyfly().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest(root + '/static/js/'));

    gulp.src(root + '/static/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest(root + '/static/css/'));
})


gulp.task('default', ['replace'], function () {
    console.log('打包成功.')
})
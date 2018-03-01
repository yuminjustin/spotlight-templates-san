var gulp = require('gulp');
var replace = require('gulp-replace');
var uglyfly = require('gulp-uglyfly');
var config = require('./build/config');

var root = config.build.gulpPath;

gulp.task('replace', function () {

    gulp.src(root + '/static/js/*.js')
        .pipe(replace('.catch(', "['catch'](")) // 解决IE不兼容
        .pipe(uglyfly().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest(root + '/static/js/'));
})


gulp.task('default', ['replace'], function () {
    console.log('打包成功.')
})

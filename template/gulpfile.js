var gulp = require('gulp');
var replace = require('gulp-replace');
var uglyfly = require('gulp-uglyfly');
var log = require('fancy-log');
var cleanCSS = require('gulp-clean-css');
var config = require('./build/config');

var root = config.build.outputPathName;

gulp.task('default', function (done) {

    gulp.src(root + '/static/js/*.js')
        .pipe(replace('.catch(', "['catch'](")) // 解决IE不兼容
        .pipe(uglyfly())
        .on('error', function (err) { // 排错
            log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest(root + '/static/js/'));

    gulp.src(root + '/static/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie6'
        }))
        .pipe(gulp.dest(root + '/static/css/'));
    done();
    console.log('打包成功.')
})

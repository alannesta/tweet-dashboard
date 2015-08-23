'use strict';

// Dependencies
var gulp = require('gulp');
//var concat = require('gulp-concat');
//var order = require('gulp-order');
//var uglify = require('gulp-uglify');
//var del = require('del');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
var nodemon = require('gulp-nodemon');
//var KarmaServer = require('karma').Server;

// Configuration
var watching = false;

gulp.task('default', function(cb) {
    //runSequence('install', 'index', 'watch', 'serve', cb);
    runSequence('index', 'serve', cb);
});

//gulp.task('watch', function() {
//    watching = true;
//
//    gulp.watch(['static/index.html'], ['index']);
//    gulp.watch(['static/scripts/**/*.html'], ['templates']);
//    gulp.watch(['static/scripts/**/*.js'], ['scripts']);
//});

//gulp.task('build', function(cb) {
//    runSequence('clean', ['assets', 'templates', 'scripts'], 'index', cb);
//});
//
//gulp.task('clean', function(cb) {
//    del(['dist'], cb);
//});

gulp.task('install', function(cb) {
    var bower = spawn('bower', ['update', '--config.interactive=false', '--quiet'], {stdio: 'inherit'});

    bower.on('exit', cb);
});

gulp.task('index', function() {
    var inject = require('gulp-inject');

    return gulp.src('static/index.html')
        .pipe(inject(gulp.src(['static/scripts/**/*.js'], {read: false}), {
            ignorePath: ['static'],
            addRootSlash: false
        }))
        .pipe(gulp.dest('./static'));
});

//gulp.task('assets', function() {
//    return gulp.src('static/assets/**/*')
//        .pipe(gulp.dest('dist/assets'));
//});
//
//gulp.task('templates', function() {
//    return gulp.src('static/app/**/*.html')
//        .pipe(gulp.dest('www/app'));
//});

//gulp.task('scripts', function() {
//    return gulp.src('src/app/**/!(*.spec).js')
//        .pipe(order(['src/app/**/*.module.js', 'src/app/**/*.js'], {base: '.'}))
//        .pipe(concat('app.js'))
//        .pipe(uglify({mangle: false}))
//        .pipe(gulp.dest('www/app'));
//});

gulp.task('serve', function() {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

//gulp.task('tdd', function() {
//    var server = new KarmaServer({
//        configFile: __dirname + '/karma.conf.js',
//        singleRun: false
//    });
//
//    server.start();
//});
//
//gulp.task('test', function(cb) {
//    var server = new KarmaServer({
//        configFile: __dirname + '/karma.conf.js',
//        singleRun: true
//    }, cb);
//
//    server.start();
//});


//gulp.task('start', function () {
//    nodemon({
//        script: 'server.js'
//        , ext: 'js html'
//        , env: { 'NODE_ENV': 'development' }
//    })
//});
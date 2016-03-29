'use strict';
var gulp      = require('gulp'),
	 gls       = require('gulp-live-server'),
	 inlineCss = require('gulp-inline-css'),
	 sass      = require('gulp-sass'),
	 csslint   = require('gulp-csslint'),
	 git       = require('gulp-git'),
	 //prettify  = require('gulp-html-prettify'),
	 $build    = "build",
	 $src      = "source",
	 $port     = 3006;


gulp.task('default',function(){
	gulp.watch( $src + '/css/*.css',['css']);
	gulp.watch( $src + '/scss/*.scss',['sass']);
	//gulp.watch( $src + '/*.html',['htmlprettify']);
});

gulp.task('css', function() {
	gulp.src($src + '/css/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});




gulp.task('server', function() {
	var server = gls.static($build, $port);
	server.start();
	console.log('Localhost en http://localhost:' + $port);

	gulp.watch([$build +'/*.html'], function (file) {
		server.notify.apply(server, [file]);
	});

});

gulp.task('commit', function(){
  return gulp.src('README.md')
    .pipe(git.commit({args: '-m "second commit"'}));
});

gulp.task('add', function(){
  return gulp.src('login.html')
		.pipe(git.add());
});

gulp.task('inlinecss', function() {
	return gulp.src($src + '/*.html')
		.pipe(inlineCss(
			{
					applyStyleTags: true,
					applyLinkTags: true,
					removeStyleTags: true,
					removeLinkTags: true
			}))
		.pipe(gulp.dest($build));
});

gulp.task('htmlprettify', function() {
	return gulp.src($src + '/*.html')
		.pipe(prettify({indent_char: '  ', indent_size: 1}))
		.pipe(gulp.dest($build))
});

gulp.task('sass', function(){
	return gulp.src($src +'/scss/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest($src +'/css'));
});

gulp.task('sass:watch', function(){
	gulp.watch($src + '/scss/*.scss',['sass']);
});

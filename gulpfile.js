'use strict';
var gulp      = require('gulp'),
	 gls       = require('gulp-live-server'),
	 inlineCss = require('gulp-inline-css'),
	 sass      = require('gulp-sass'),
	 csslint   = require('gulp-csslint'),
     htmlhint  = require("gulp-htmlhint"),
	 prettify  = require('gulp-html-prettify'),
	 git       = require('gulp-git'),
	 $build    = "build",
	 $src      = "source",
	 $port     = 3006;


gulp.task('default',function(){
	gulp.watch( $src + '/css/*.css',['css']);
	gulp.watch( $src + '/scss/*.scss',['sass']);
	gulp.watch( $src + '/*.html',['html']);
});

gulp.task('css', function() {
    gulp.src($src +'/scss/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest($src +'/css'));
});

gulp.task('css', function() {
	gulp.src($src + '/css/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});

gulp.task('css:watch', function(){
	gulp.watch( $src +'/scss/*.scss' ,['sass']);
  	gulp.watch( $src + '/css/*.css' ,['csslint']);  
});


gulp.task('csslint', function() {
	gulp.src($src + '/css/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});

gulp.task('sass', function(){
	return gulp.src($src +'/scss/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest($src +'/css'));
});

gulp.task('sass:watch', function(){
	gulp.watch($src + '/scss/*.scss',['sass']);
});

gulp.task('html', function() {
	return gulp.src( $src + '/*.html')
		.pipe(prettify({indent_char: '  ', indent_size: 1}))
        .pipe(htmlhint())
		.pipe(gulp.dest($build))
});

gulp.task('html:watch', function(){
	gulp.watch( $src + '/*.html',['html']);
});

gulp.task('htmlprettify', function() {
	return gulp.src($src + '/*.html')
		.pipe(prettify({indent_char: '  ', indent_size: 1}))
		.pipe(gulp.dest($build))
});

gulp.task('htmlhint', function() {
	gulp.src($src + '/*.html')
		.pipe(htmlhint())
});

gulp.task('server', function() {
	var server = gls.static($build, $port);
	server.start();
	console.log('Localhost en http://localhost:' + $port);

	gulp.watch([$build +'/*.html'], function (file) {
		server.notify.apply(server, [file]);
	});

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






=======
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
>>>>>>> 1299479a28355c9e6bb5a92df1d829c65e30c81f

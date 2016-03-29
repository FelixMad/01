'use strict';
var gulp      = require('gulp'),
	 gls       = require('gulp-live-server'),
	 inlineCss = require('gulp-inline-css'),
	 sass      = require('gulp-sass'),
	 csslint   = require('gulp-csslint'),
<<<<<<< HEAD
     htmlhint  = require("gulp-htmlhint"),
	 prettify  = require('gulp-html-prettify'),
=======
	 git       = require('gulp-git'),
	 //prettify  = require('gulp-html-prettify'),
>>>>>>> 1299479a28355c9e6bb5a92df1d829c65e30c81f
	 $build    = "build",
	 $src      = "source",
	 $port     = 3006;


gulp.task('default',function(){
	gulp.watch( $src + '/css/*.css',['css']);
	gulp.watch( $src + '/scss/*.scss',['sass']);
<<<<<<< HEAD
	gulp.watch( $src + '/*.html',['html']);
});

gulp.task('css', function() {
    gulp.src($src +'/scss/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest($src +'/css'));
=======
	//gulp.watch( $src + '/*.html',['htmlprettify']);
});

gulp.task('css', function() {
>>>>>>> 1299479a28355c9e6bb5a92df1d829c65e30c81f
	gulp.src($src + '/css/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});

<<<<<<< HEAD
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
=======

>>>>>>> 1299479a28355c9e6bb5a92df1d829c65e30c81f


gulp.task('server', function() {
	var server = gls.static($build, $port);
	server.start();
	console.log('Localhost en http://localhost:' + $port);

	gulp.watch([$build +'/*.html'], function (file) {
		server.notify.apply(server, [file]);
	});

});

<<<<<<< HEAD
=======
gulp.task('commit', function(){
  return gulp.src('README.md')
    .pipe(git.commit({args: '-m "second commit"'}));
});

gulp.task('add', function(){
  return gulp.src('login.html')
		.pipe(git.add());
});
>>>>>>> 1299479a28355c9e6bb5a92df1d829c65e30c81f

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

<<<<<<< HEAD




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

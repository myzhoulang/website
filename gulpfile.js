var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')

console.log(gulp)

//less => css task
gulp.task('less', function () {
	gulp.src('./public/stylesheets//**/*.less').pipe(less()).pipe(gulp.dest('./public/stylesheets/'))
})



//watch
gulp.task('watch', function () {
	// watch LESS task
	console.log(__dirname)
	gulp.watch('./public/stylesheets/**/*.less', ['less']);
})

//default
gulp.task('default', ['watch']);
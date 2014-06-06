var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass');

gulp.task('browser-sync',function(){
  browserSync.init(null, {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function(){
  gulp.src('sass/style.scss')
    .pipe(sass({includePaths: ['sass']}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['sass', 'browser-sync'], function(){
  gulp.watch("sass/*.scss", ['sass']);
});

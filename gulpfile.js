const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass',function(){
  return sass
  .src('scss/**/*.scss')
  .pipe(SASS())
  .pipe(gulp.dest('css'))

})

gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'))
=======
  gulp.watch('scss/**/*.scss', gulp.series('sass'))
>>>>>>> dda39a24e23e47d31550506c85e87501612ec198
})

const GULP = require('gulp')
const SASS = require('gulp-sass')

gulp.task('sass',function(){
  return GULP
  .src('scss/**/*.scss')
  .pipe(SASS())
  .pipe(gulp.dest('css'))

})

gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'))
})

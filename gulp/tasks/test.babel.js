import gulp from 'gulp'
import eslint from 'gulp-eslint'

gulp.task('lint', () => {
  return gulp.src('./assets/src/es6/**/*.js')
    .pipe(eslint({useEslintrc:true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

import gulp from 'gulp'

import './build.babel'

gulp.task('watch', ['build'], () => {
  gulp.watch(['assets/src/**/*.js'], ['lint', 'webpack'])
  gulp.watch(['assets/src/**/*.jsx'], ['lint', 'webpack'])
  gulp.watch(['assets/src/**/*.styl'], ['stylus'])
  gulp.watch(['assets/src/**/*.shader'], ['shader'])
  gulp.watch(['assets/src/media/*'], ['media'])
})

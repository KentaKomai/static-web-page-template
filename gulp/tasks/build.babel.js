
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import stylus from 'gulp-stylus'
import webpack from 'webpack-stream'
import webpackConfig from '../../webpack.config.js'


gulp.task('build', () => { gulp.start('build:dev')})
gulp.task('build:dev', () => {
  gulp.start('webpack:dev')
  gulp.start('stylus:dev')
  gulp.start('media')
  gulp.start('shader')
})

gulp.task('webpack', () => { gulp.start('webpack:dev')})
gulp.task('webpack:dev', () => {
  return gulp.src('')
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./assets/dist/javascripts/'))
})

gulp.task('stylus', () => { gulp.start('stylus:dev')})
gulp.task('stylus:dev', () => {
  return gulp.src('./assets/src/stylus/*')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./assets/dist/stylesheets/'))
})

gulp.task('media', () => {
  return gulp.src('./assets/sources/media/*')
    .pipe(plumber())
    .pipe(gulp.dest('./assets/dist/media/'))
})

gulp.task('shader', () => {
  return gulp.src('./assets/sources/sharder/*')
  .pipe(gulp.dest('./assets/dist/sharder/'))
})

gulp.task('clean', cd => {
  del(['./assets/dist/*'], cd)
})

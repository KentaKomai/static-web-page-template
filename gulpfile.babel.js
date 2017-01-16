
import gulp from 'gulp'
import webserver from 'gulp-webserver'
import './gulp/tasks/build.babel.js'
import './gulp/tasks/test.babel.js'
import './gulp/tasks/watch.babel.js'

gulp.task('default', ['watch'], () => {
    gulp.src('./') // 公開したい静的ファイルを配置したディレクトリを指定する
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            livereload: true
        }));
});

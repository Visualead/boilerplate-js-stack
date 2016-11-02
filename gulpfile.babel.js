import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

const config = {
  paths: {
    js: {
      src: 'src/**/*.js',
      lib: 'lib/'
    }
  }
};

gulp.task('babel-src', ['lint-src'], () =>
  gulp.src(config.paths.js.src)
    .pipe(babel())
    .pipe(gulp.dest(config.paths.js.lib))
);

gulp.task('lint-src', () =>
  gulp.src(config.paths.js.src)
    .pipe(eslint())
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch(config.paths.js.src, ['babel-src', 'test']);
});

gulp.task('default', ['watch', 'babel-src']);

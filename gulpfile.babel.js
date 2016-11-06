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

gulp.task('babelSrc', ['eslintSrc'], () =>
  gulp.src(config.paths.js.src)
    .pipe(babel())
    .pipe(gulp.dest(config.paths.js.lib))
);

gulp.task('eslintSrc', () =>
  gulp.src(config.paths.js.src)
    .pipe(eslint())
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch(config.paths.js.src, ['babelSrc']);
});

gulp.task('default', ['watch', 'babelSrc']);

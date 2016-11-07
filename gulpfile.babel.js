/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';

const paths = {
  srcJs: 'src/**/*.js',
  libDir: 'lib/',
  srcDir: 'src/',

  sourceRoot: path.join(__dirname, 'src'),
};

gulp.task('babelSrc', ['eslintSrc'], () =>
  gulp.src(paths.srcJs)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }))
    .pipe(gulp.dest(paths.libDir))
);

gulp.task('eslintSrc', () =>
  gulp.src(paths.srcJs)
    .pipe(eslint())
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch(paths.srcJs, ['babelSrc']);
});

gulp.task('default', ['watch', 'babelSrc']);

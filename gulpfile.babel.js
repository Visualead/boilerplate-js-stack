/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import eslint from 'gulp-eslint';
import flow from 'gulp-flowtype';
import rimraf from 'gulp-rimraf';
import runSequence from 'run-sequence';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';

const paths = {
  srcJs: 'src/**/*.js',
  libDir: 'lib/',
  srcDir: 'src/',
  testRun: 'lib/test/**/*.js',
  sourceRoot: path.join(__dirname, 'src'),
};

gulp.task('clean', () =>
  gulp.src([paths.libDir])
    .pipe(rimraf({ force: true }))
);

gulp.task('babelSrc', ['lint'], () =>
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
    .pipe(eslint.failAfterError())
);

gulp.task('flowtypeSrc', () => {
  try {
    execSync('./node_modules/.bin/flow', { stdio: 'inherit' });
  } catch (e) {
    gulp.stop();
  }
});

gulp.task('lint', ['eslintSrc', 'flowtypeSrc']);

gulp.task('watch', () => {
  gulp.watch(paths.srcJs, ['babelSrc']);
});

gulp.task('watch-test', () => {
  gulp.watch(paths.srcJs, ['test']);
});

gulp.task('test', ['babelSrc'], () =>
  gulp.src([paths.testRun])
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', err => console.log(err.stack))
);

// Default Task
gulp.task('default', () =>
  runSequence('clean', ['babelSrc', 'test'])
);

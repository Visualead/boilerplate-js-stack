import gulp from 'gulp';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
    allSrcJs: 'src/**/*.js',
    serverSrcJs: 'src/server/**/*.js',
    sharedSrcJs: 'src/shared/**/*.js',
    clientEntryPoint: 'src/client/app.js',
    gulpFile: 'gulpfile.babel.js',
    webpackFile: 'webpack.config.babel.js',
    libDir: 'lib',
    distDir: 'dist',
};

gulp.task('babel', () => {
    return gulp.src(paths.allSrcJs)
        .pipe(babel())
        .pipe(gulp.dest(paths.libDir));
});

gulp.task('main', () =>
    gulp.src(paths.clientEntryPoint)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.distDir))
);

gulp.task('watch', function() {

    gulp.watch([paths.allSrcJs], ['babel', 'main']);

});

gulp.task('default', ['watch', 'main']);
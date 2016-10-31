import gulp from 'gulp';
import babel from 'gulp-babel';

let paths = {
    dirSrc: "./src",
    dirLib: "./lib"
};

gulp.task('babel', () => {
    return gulp.src(`${paths.dirSrc}/**/*.js`)
        .pipe(babel())
        .pipe(gulp.dest(paths.dirLib));
});

gulp.task('watch', function() {

    gulp.watch([`${paths.dirSrc}/**/*.js`], ['babel']);

});
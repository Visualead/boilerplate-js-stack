import gulp from 'gulp';
import babel from 'gulp-babel';

const paths = {
    allSrcJs: 'src/**/*.js',
    libDir: 'lib',
};

gulp.task('babel', () => {
    return gulp.src(paths.allSrcJs)
        .pipe(babel())
        .pipe(gulp.dest(paths.libDir));
});

gulp.task('watch', function() {
    gulp.watch([paths.allSrcJs], ['babel']);
});

gulp.task('default', ['watch', 'babel']);
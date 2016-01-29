var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

var config = {
    tsDest:    'dist/js',
    tsFiles:   ['src/**/*.ts'],
    tsProject: ts.createProject('tsconfig.json'),
};

gulp.task('default', ['ts', 'watch']);

// Compile typescript sources
gulp.task('ts', function () {
    gulp.src(config.tsFiles)
        .pipe(ts(config.tsProject))
        .js
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', ['ts'], function () {
    gulp.watch(config.tsFiles, ['ts']);
});

/*
 * Use nodemon instead of node to run your code, and now
 * your process will automatically restart when your code changes.
 */
gulp.task('nodemon', ['watch'], function () {
    nodemon({ script: 'dist/js/app.js' });
});
var gulp = require('gulp'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    { series } = require('gulp');


gulp.task('previewDist', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('deleteDistFolder', function () {
    return del("./dist");
});

gulp.task('copyGeneralFiles', function () {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**/*',
        '!./app/assets/styles/**/*',
        '!./app/assets/scripts/**/*',
        '!./app/temp',
        '!./app/temp/**'
    ]

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./dist"));
});

gulp.task('usemin', function () {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [
                function () {
                    return rev()
                }, function () {
                    return cleanCSS()
                }
            ],
            js: [
                function () {
                    return rev()
                }, function () {
                    return uglify()
                }
            ]
        }))
        .pipe(gulp.dest("./dist"));
});




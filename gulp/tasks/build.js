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
        '!./app/services.html',
        '!./app/quote.html',
        '!./app/about.html',
        '!./app/portfolio.html',
        '!./app/casestudy/tru-data.case.html',
        '!./app/work.html',
        '!./app/contact.html',
        // '!./app/assets/images/**/*',
        '!./app/assets/styles/**/*',
        '!./app/assets/scripts/**/*',
        '!./app/temp',
        '!./app/temp/**'
    ]

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./dist"));
});

gulp.task('usemin', function () {
    return gulp.src(["./app/index.html", "./app/services.html", "./app/quote.html", "./app/work.html", "./app/about.html", "./app/contact.html", "./app/portfolio.html", "./app/casestudy/tru-data.case.html"])
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




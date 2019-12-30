
const { watch, task, series, src } = require('gulp');
const browserSync = require('browser-sync').create();


task('cssInject', function() {
    return src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});


task('scriptsRefresh', function(cb) {
    browserSync.reload();
    cb();
});


task('watch', function(cb) {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    //restart the home page if there is any change
    watch('./app/index.html', function(cb) {
        browserSync.reload();
        cb();
    });

    //restart the services page if there is any change
    watch('./app/services.html', function(cb) {
        browserSync.reload();
        cb();
    });

    //restart the quote page if there is any change
    watch('./app/quote.html', function(cb) {
        browserSync.reload();
        cb();
    });

    //restart the about page if there is any change
    watch('./app/about.html', function(cb) {
        browserSync.reload();
        cb();
    });

    //restart the contact us page if there is any change
    watch('./app/contact.html', function(cb) {
        browserSync.reload();
        cb();
    });

    //restart the portfolio page if there is any change
    watch('./app/portfolio.html', function(cb) {
        browserSync.reload();
        cb();
    });

    watch('./app/work.html', function(cb) {
        browserSync.reload();
        cb();
    });

    watch('./app/casestudy/tru-data.case.html', function(cb) {
        browserSync.reload();
        cb();
    });

    watch('./app/assets/styles/**/*.css', series('styles', 'cssInject'));

    watch('./app/assets/scripts/**/*.js', series(series('modernizr', 'scripts'), 'scriptsRefresh'));

    cb();


});




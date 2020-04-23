/* global requirements */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/**
 * serve task, will launch browserSync and launch index.html files
 * and watch the changes for html and css files.
 **/
gulp.task('serve', function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        // watch: true,
        server: true,
        files: ["css/*.css", "js/*.js", "*.html"],
        index: "default.html",
        browser: "google chrome",
        notify: false,
        injectChanges: false,
    });

});

gulp.task('default', gulp.series('serve'));
var paths = require('../paths');
var gulp = require("gulp");
var webpack = require("webpack-stream");

gulp.task('package:browser', ["compile"], function () {
    var webpackConfig = {
        output: {
            entry: "index.js",
            filename: "treacherous-knockout.browser.js",
            library: "Treacherous",
            libraryTarget: "umd"
        },
        externals: [
            {
                "knockout": "var ko"
            }
        ]
    };

    return gulp.src([paths.output + "/index.js"])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('package:minimal', ["compile"], function () {
    var webpackConfig = {
        output: {
            entry: "index.js",
            filename: "treacherous-knockout.js",
            library: "Treacherous",
            libraryTarget: "umd"
        },
        externals: [
            {
                "eventjs": true,
                "treacherous": true,
                "knockout": true,
                "property-resolver": true
            }
        ]
    };

    return gulp.src([paths.output + "/index.js"])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist));
});


gulp.task('package:all', ["compile"], function () {
    var webpackConfig = {
        output: {
            entry: "index.js",
            filename: "treacherous-knockout.testable.js",
            library: "Treacherous",
            libraryTarget: "umd"
        }
    };

    return gulp.src([paths.output + "/index.js"])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('package', ["package:minimal", "package:browser", "package:all"]);
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
                "bluebird": "var Promise",
                "eventjs": "var EventJs",
                "treacherous": "var Treacherous",
                "knockout": "var ko",
                "property-resolver": "var PropertyResolver"
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
            filename: "treacherous-knockout.minimal.js",
            library: "Treacherous",
            libraryTarget: "umd"
        },
        externals: [
            {
                "bluebird": true,
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
            filename: "treacherous-knockout.all.js",
            library: "Treacherous",
            libraryTarget: "umd"
        }
    };

    return gulp.src([paths.output + "/index.js"])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('package', ["package:minimal", "package:browser", "package:all"]);
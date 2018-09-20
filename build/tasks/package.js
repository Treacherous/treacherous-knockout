var paths = require('../paths');
var gulp = require("gulp");
var webpack = require("webpack-stream");
var sequence = require("run-sequence");

gulp.task('package:browser', function () {
    var webpackConfig = {
        output: {
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

gulp.task('package:minimal', function () {
    var webpackConfig = {
        output: {
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


gulp.task('package:all', function () {
    var webpackConfig = {
        output: {
            filename: "treacherous-knockout.testable.js",
            library: "Treacherous",
            libraryTarget: "umd"
        }
    };

    return gulp.src([paths.output + "/index.js"])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('package', ["compile"], function(callback){
    sequence("package:minimal",
        "package:browser",
        "package:all",
        callback);
});
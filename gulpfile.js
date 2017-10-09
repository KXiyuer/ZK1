/**
 * Created by XPHLR on 2017/10/9.
 */

var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var gulpUglify = require("gulp-uglify");
var notify = require("gulp-notify");

gulp.task("server", function () {
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulpUglify())
        .pipe(gulp.dest("./js/"))
        .pipe(notify({messafe: "success."}))
});



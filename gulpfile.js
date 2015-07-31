var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function(){
    gulp.watch('src/*.js', ['default'])
});
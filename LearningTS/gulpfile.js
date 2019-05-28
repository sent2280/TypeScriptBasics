var deploy = require("gulp-deploy-git");
var gulp = require("gulp");

gulp.task("deploy",async function(){
    return gulp.src("../LearningTS")
        .pipe(deploy({
            repository: "https://github.com/sent2280/TypeScriptBasics.git"
        }));

gulp.task('hello', async function() {
    console.log('Hello World!!!');
    }); 


gulp.task("deploy",async function(){
    return gulp.src("../LearningTS")
        .pipe(deploy({
            repository: "https://github.com/sent2280/TypeScriptBasics.git"
        }));
}); 

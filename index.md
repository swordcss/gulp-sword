## gulp-sword

Compile [SwordCSS](https://github.com/swordcss/swordcss) to CSS with [gulp](https://github.com/gulpjs/gulp).

### Installation

`npm i -D gulp-sword`

#### Usage

```javascript
const gulp = require("gulp");
const sword = require("gulp-sword");

gulp.task("sword", () => {
  gulp.src(["src/**/*.sw"]).pipe(sword()).pipe(gulp.dest("dist"));
});
```

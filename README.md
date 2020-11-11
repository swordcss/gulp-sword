# gulp-sword

> Compile SwordCSS to CSS with Gulp

[![Build Status](https://img.shields.io/travis/swordcss/gulp-sword)](https://travis-ci.org/swordcss/gulp-sword)
[![Coverage Status](https://img.shields.io/coveralls/github/swordcss/gulp-sword)](https://coveralls.io/github/swordcss/gulp-sword?branch=master)
[![Maintainability Percentage](https://img.shields.io/codeclimate/maintainability-percentage/swordcss/gulp-sword)](https://codeclimate.com/github/swordcss/gulp-sword)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/swordcss/gulp-sword.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/swordcss/gulp-sword/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/swordcss/gulp-sword.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/swordcss/gulp-sword/context:javascript)
[![npm version](https://img.shields.io/npm/v/gulp-sword)](https://npmjs.org/package/gulp-sword)

## Installation

```
$ npm install -D gulp-sword
```

### Usage

```javascript
const { src, dest } = require("gulp");

const sword = require("gulp-sword");

exports.css = () => {
    return src("./src/**/*.sw")
        .pipe(sword({ ...myConfigOptionsHere }))
        .pipe(dest("./dist/css"))
}
```
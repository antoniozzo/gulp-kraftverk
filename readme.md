# gulp-kraftverk

[![NPM version](https://img.shields.io/npm/v/gulp-kraftverk.svg)](https://www.npmjs.com/package/gulp-kraftverk)
[![Download stats](https://img.shields.io/npm/dm/gulp-kraftverk.svg)](https://www.npmjs.com/package/gulp-kraftverk)

[![NPM stats](https://nodei.co/npm/gulp-kraftverk.svg?downloadRank=true&downloads=true)](https://www.npmjs.org/package/gulp-kraftverk)

This is a gulp plugin for the style guide generator [Kraftverk](https://www.npmjs.com/package/kraftverk). Kraftverk uses KSS for parsing CSS comments to later generate a beautiful style guide with alot of useful features.

## Usage

```bash
npm install gulp-kraftverk --save-dev
```

In your `gulpfile.js`:

```js
var gulp      = require('gulp');
var kraftverk = require('gulp-kraftverk');

gulp.task('kraftverk', function() {
	return gulp.src('src/css/**') // or LESS/SASS/SCSS etc...
		.pipe(kraftverk(/* options */))
		.pipe(gulp.dest('styleguide/'));
});
```

## Kraftverk

See [Kraftverk](https://www.npmjs.com/package/kraftverk) for build options, syntax and other usages.

/*
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');



const assets = {
  source: {
    flags: 'node_modules/flag-icon-css/flags/**/*',
    fonts: 'node_modules/bootstrap-sass/assets/fonts/**/*'
  },
  dest: {
    flags: 'assets/flags',
    fonts: 'assets/fonts'
  }
};

const sassOptions = {
  outputStyle: 'compressed',
  includePaths: ['node_modules/flag-icon-css/sass', 'node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/bootswatch']
};

gulp.task('sass:development', function() {
  gulp.src('sass/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('dist:copy', function() {
  gulp.src(assets.source.flags).pipe(gulp.dest(assets.dest.flags));
  gulp.src(assets.source.fonts).pipe(gulp.dest(assets.dest.fonts));
});

gulp.task('react:development', function() {
  const config = require('./webpack.config.js');
  config.watch = true;

  gulp.src('./javascript/app.jsx').pipe(gulpWebpack(config, webpack));
});

gulp.task('default',function() {
  gulp.watch('sass/**/*.*', ['sass:development']);
});

import gulp from "gulp";
const { src, dest, watch, series } = gulp;

import prefix from "gulp-autoprefixer";
import minify from "gulp-clean-css";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

import gulpSass from "gulp-sass";
import defaultSass from "sass";
const sass = gulpSass(defaultSass);

// scss
function compileCss() {
  return src(["src/scss/*.scss"])
    .pipe(sass.sync())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("dist/css"));
}

// images
function optimizeImg() {
  return src("src/assets/images/*.{jpg,png}")
    .pipe(imagemin([optipng({ optimizationLevel: 5 })]))
    .pipe(dest("dist/images"));
}

// copy html
function buildHtml() {
  return src("index.html").pipe(dest("dist"));
}

// copy fonts
function copyFonts() {
  return src("src/assets/fonts/*").pipe(dest("dist/fonts"));
}

// scripts
function buildScripts() {
  return src("src/scripts/*.js").pipe(dest("dist/scripts"));
}

// watch
function watchTask() {
  watch("src/scss/*.scss", compileCss);
  watch("src/assets/images/*.{jpg,png}", optimizeImg);
  watch("src/scripts/*.js", buildScripts);
  watch("index.html", buildHtml);
}

export default series(
  compileCss,
  optimizeImg,
  copyFonts,
  buildScripts,
  buildHtml,
  watchTask
);

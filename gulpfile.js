import gulp from "gulp";
const { src, dest, watch, series } = gulp;

import prefix from "gulp-autoprefixer";
import minify from "gulp-clean-css";
import imagemin from "gulp-imagemin";

import gulpSass from "gulp-sass";
import defaultSass from "sass";
const sass = gulpSass(defaultSass);

// scss
function compilescss() {
  return src("src/scss/*.scss")
    .pipe(sass.sync())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("dist/css"));
}

// images
function optimizeimg() {
  return src("src/assets/images/*.{jpg,png}")
    .pipe(imagemin())
    .pipe(dest("dist/images"));
}

// copy html
function buildhtml() {
  return src("index.html").pipe(dest("dist"));
}

// copy fonts
function copyFonts() {
  return src("src/assets/fonts/*").pipe(dest("dist/fonts"));
}

// watch
function watchTask() {
  watch("src/scss/*.scss", compilescss);
  watch("src/assets/images/*.{jpg,png}", optimizeimg);
  watch("index.html", buildhtml);
}

export default series(compilescss, optimizeimg, copyFonts, watchTask);

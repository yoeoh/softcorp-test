import gulp from "gulp";
const { src, dest, watch, series } = gulp;

import webpackStream from "webpack-stream";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";

import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

import prefix from "gulp-autoprefixer";
import minify from "gulp-clean-css";
import concat from "gulp-concat";

import gulpSass from "gulp-sass";
import defaultSass from "sass";
const sass = gulpSass(defaultSass);

function copyModulesJs() {
  const modules = [
    "node_modules/nice-select2/dist/js/nice-select2.js",
    "node_modules/simplebar/dist/simplebar.min.js",
  ];

  return src(modules).pipe(dest("src/scripts"));
}

function copyModulesCss() {
  const modules = [
    // "node_modules/nice-select2/dist/css/nice-select2.css",
    "node_modules/simplebar/dist/simplebar.min.css",
  ];

  return src(modules).pipe(dest("dist/css"));
}

// function copyModulesScss() {
//   const modules = ["node_modules/nice-select2/src/scss/nice-select2.scss"];

//   return src(modules).pipe(dest("src/scss"));
// }

function buildScripts() {
  return src("src/scripts/*.js").pipe(dest("dist/scripts"));
}

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
  return src("src/assets/images/*.{jpg,png,ico}")
    .pipe(
      imagemin([optipng({ optimizationLevel: 5 }), mozjpeg({ quality: 75 })])
    )
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

// watch
function watchTask() {
  watch("src/scss/*.scss", compileCss);
  watch("src/assets/images/*.{jpg,png}", optimizeImg);
  watch("src/scripts/*.js", buildScripts);
  watch("index.html", buildHtml);
}

export default series(
  copyModulesJs,
  copyModulesCss,
  // copyModulesScss,
  buildScripts,
  compileCss,
  optimizeImg,
  copyFonts,
  buildHtml,
  watchTask
);

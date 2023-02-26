import gulp from "gulp";
const { src, dest, watch, series } = gulp;

import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

import prefix from "gulp-autoprefixer";
import minify from "gulp-clean-css";
import concat from "gulp-concat";

import terser from "gulp-terser";

import gulpSass from "gulp-sass";
import defaultSass from "sass";
const sass = gulpSass(defaultSass);

function copyModulesJs() {
  const modules = [
    "node_modules/nice-select2/dist/js/nice-select2.js",
    "node_modules/simplebar/dist/simplebar.min.js",
  ];

  return src(modules).pipe(dest("src/scripts/libs"));
}

function copyModulesCss() {
  const modules = ["node_modules/simplebar/dist/simplebar.min.css"];

  return src(modules).pipe(dest("src/styles/libs"));
}

function buildScripts() {
  return src(["src/scripts/libs/*.js", "src/scripts/*.js"])
    .pipe(concat("app.js"))
    .pipe(terser())
    .pipe(dest("dist/scripts"));
}

function compileCss() {
  return src(["src/styles/*.scss"])
    .pipe(sass.sync())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("dist/css"));
}

function optimizeImg() {
  return src("src/assets/images/*.{jpg,png,ico,svg}")
    .pipe(
      imagemin([
        optipng({ optimizationLevel: 5 }),
        mozjpeg({ quality: 75 }),
        svgo(),
      ])
    )
    .pipe(dest("dist/images"));
}

function copyHtml() {
  return src("src/index.html").pipe(dest("dist"));
}

function copyFonts() {
  return src("src/assets/fonts/*").pipe(dest("dist/fonts"));
}

function watchTask() {
  watch("src/styles/*.scss", compileCss);
  watch("src/assets/images/*.{jpg,png}", optimizeImg);
  watch("src/scripts/*.js", buildScripts);
  watch("src/index.html", copyHtml);
}

export default series(
  copyModulesJs,
  copyModulesCss,
  buildScripts,
  compileCss,
  optimizeImg,
  copyFonts,
  copyHtml,
  watchTask
);

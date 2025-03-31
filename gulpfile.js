import { src, dest, watch, series } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);
// sass.

export function js(done) {
  src("src/js/app.js").pipe(dest("build/js"));
  done();
}

export function css(done) {
  src("src/scss/app.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("build/css", { sourcemaps: "." }));
  done();
}

export function dev() {
  // Primero le deciemos que queremos observar
  // Segundo va la funcion que queremos que ejecute cuando cambie algo
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js);
}

// PERMITE EJECUTAR VARIAS TAREAS
export default series(js, css, dev);

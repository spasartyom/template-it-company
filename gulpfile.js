import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

export function style() {
  return gulp.src('./css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

export function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    }
  })
  gulp.watch('./css/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
}
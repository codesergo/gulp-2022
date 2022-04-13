import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
  return app.gulp.src(app.path.src.svgicons, {})
    .pipe(app.plugins.plumber())
    .pipe(svgSprite({
      mode: {
        stack: {
          example: true,
          sprite: '../icons/icons.svg'
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}
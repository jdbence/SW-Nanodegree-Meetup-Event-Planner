var gulp = require('gulp'),
  sass = require('gulp-sass'),
  prefixer = require('gulp-autoprefixer'),
  eslint = require('gulp-eslint'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  del = require('del'),
  config = require('./config');

// builds html and styles
gulp.task('default', ['lint', 'html', 'styles']);

// lint JS files when attempting to commit changes to git
gulp.task('pre-commit', ['lint']);

// lint JS files
gulp.task('lint', function () {
  return gulp.src([
      config.src + '/js/**/*.js',
      '!' + config.src + '/js/config.js',
      '!' + config.src + '/js/vendor/**/*.js'
  ])
    .pipe(reload({stream: true, once: true}))
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError());
});

// copy html to dist folder
gulp.task('html', function () {
  return gulp.src(config.src + '/*.html')
    .pipe(gulp.dest(config.dist));
});

// convert sass to css with autoprefix
gulp.task('styles', function() {
  gulp.src(config.src + '/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(config.dist + '/styles'))
});

// reload file changes (html, js, scss)
gulp.task('live', function(){
  // start file server
  browserSync({
    notify: false,
    port: process.env.PORT || 8081,
    ui: {
      port: 8081
    },
    server: {
      baseDir: [config.tmp, config.src],
      routes: {
        '/node_modules': 'node_modules',
        '/styles': 'dist/styles'
      }
    }
  });
  // listen for file changes
  gulp.watch([
    config.src + '/*.html',
    config.src + '/js/**/*.js',
    config.src + '/img/**/*',
    config.tmp + '/js/**/*.js'
  ]).on('change', reload);
  gulp.watch(config.src + '/styles/**/*.scss', ['styles', reload]);
});

// removes all files from the dist folder
gulp.task("clean", function () {
  return del([config.dist + '/**', '!' + config.dist]);
});
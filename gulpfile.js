var gulp = require('gulp'),
  sass = require('gulp-sass'),
  prefixer = require('gulp-autoprefixer'),
  eslint = require('gulp-eslint'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  bable = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  vulcanize = require('gulp-vulcanize'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  del = require('del'),
  config = require('./config');

// builds html and styles
gulp.task('default', ['html', 'styles', 'lint', 'scripts:prod']);

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
gulp.task('styles', function () {
  return gulp.src(config.src + '/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(prefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist + '/styles'))
    .pipe(browserSync.stream());
});

// concats JS files
gulp.task('scripts', function () {
  return gulp.src(config.src + '/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(bable())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist + '/js'))
})

// concats and minifies JS files
gulp.task('scripts:prod', function () {
  return gulp.src(config.src + '/js/**/*.js')
    .pipe(bable())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist + '/js'))
})

// reload file changes (html, js, scss)
gulp.task('live', function () {
  // start file server
  browserSync({
    notify: false,
    port: process.env.PORT || 8081,
    ui: {
      port: 8081
    },
    server: {
      baseDir: [config.dist],
      routes: {
        '/node_modules': 'node_modules',
        '/bower_components': 'bower_components',
        '/styles': 'dist/styles'
      }
    }
  });
  // listen for file changes
  // gulp.watch([
  //   config.dist + '/*.html',
  //   config.dist + '/img/**/*',
  //   config.dist + '/js/**/*.js'
  // ]).on('change', reload);
  // changes in src should recompile and reload
  gulp.watch(config.src + '/**/*.html', ['html', 'vulcanize', reload]);
  gulp.watch(config.src + '/js/**/*.js', ['lint', 'scripts', reload]);
  gulp.watch(config.src + '/styles/**/*.scss', ['styles', reload]);
});

gulp.task('vulcanize', function() {
  return gulp.src(config.src + '/elements/elements.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineCss: true,
      inlineScripts: true
    }))
    .pipe(gulp.dest(config.dist + '/elements'))
});

// removes all files from the dist folder
gulp.task("clean", function () {
  return del([config.dist + '/**', '!' + config.dist]);
});
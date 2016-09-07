'use strict';

// use the require() function to get access to our modules
  var gulp = require('gulp');
  var gulputil = require('gulp-util');
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');
  var autoprefixer = require('gulp-autoprefixer');
  var eslint = require('gulp-eslint');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var browserify = require('gulp-browserify');
  //var browserSync = require('browser-sync');
  var notify = require('gulp-notify');
  //var server = require('gulp-server-livereload');
  //var del = require('gulp-del');
  var watch = require('gulp-watch');

// set up plugin options
  var sassOptions = {
        errLogToConsole: true,
        outputStyle: 'compressed'
      },

      autoprefixerOptions = {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
      },

      lintOptions = { // get more from http://eslint.org/docs/rules/ and http://eslint.org/docs/user-guide/configuring#extending-configuration-files
        'rules':{
            'quotes': [1, 'single'],
            'semi': [1, 'always']
        }
      };

// define file paths
  var cssInput = 'app/styles/sass/**/*.scss',
      cssOutput = 'public/css/',
      jsInput = 'app/scripts/*.js',
      jsOutput = 'public/js/main.js',
      vendorInput = 'app/scripts/vendor/**/*.js',
      vendorOutput = 'public/js/';

// build the tasks... gulp.task(nameOfTask, function(){callBackFunction})


  // compile the css from sass and create sourcemaps
  gulp.task('css', function() {
    gulp.src(cssInput)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer())
      .pipe(gulp.dest(cssOutput));
  });

  // validate your js
  gulp.task('js', function() {
    gulp.src(jsInput)
      .pipe(eslint({
        'rules':{
          'quotes': [1, 'single'],
          'semi': [1, 'always']
        }
      }))
  });

  // combine vendor js files into one file and minify
  gulp.task('vendor', function() {  
    gulp.src(vendorInput)
      .pipe(concat('vendor.js'))
      .pipe(uglify())
      .pipe(gulp.dest(vendorOutput))
  });

  // // del unused files
  // gulp.task('del', function () {  
  //   gulp.src('build', {read: false})
  //     .pipe(del());
  // });

  // start server
  // gulp.task('runserver', function() {
  //   gulp.src('app')
  //     .pipe(server({
  //       livereload: true,
  //       directoryListing: true,
  //       open: true,
  //       defaultFile: '/app/index.html'
  //     }));
  // });

// watch the sass files and run the styles task when something changes and log a message in the console
  gulp.task('watch', function() {

    gulp.watch(cssInput, ['css'])
      .on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });

    gulp.watch(jsInput, ['js'])
      .on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });

      // add watch script for images here
  });

  // set up the watch tasks... pass in the path to the files, then an array fot hte tasks we want to run
    // gulp.task('default',function() {
    //   gulp.watch('app/styles/sass/**/*.scss',['styles']);
    // });  

  gulp.task('default',['css', 'js', 'vendor', 'watch']);  
  gulp.task('test', ['runserver']);






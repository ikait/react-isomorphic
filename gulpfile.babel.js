import cp from 'child_process';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import webpack from 'webpack';
import minimist from 'minimist';
import bg from 'gulp-bg';

const $ = gulpLoadPlugins();
const argv = minimist(process.argv.slice(2));
const src = Object.create(null);
let watch = false;

// Resource files
gulp.task('resources', () => {
  src.resources = [
    'package.json',
    'src/templates*/**'
  ];
  return gulp.src(src.resources)
    .pipe($.changed('build'))
    .pipe(gulp.dest('build'))
    .pipe($.size({title: 'resources'}));
});

// Bundle
gulp.task('bundle', cb => {
  let config = require('./webpack.config.js');
  const bundler = webpack(config);
  const verbose = !!argv.verbose;
  let bundlerRunCount = 0;

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    console.log(stats.toString({
      colors: $.util.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));

    if (++bundlerRunCount === config.length) {
      return cb();
    }
  }

  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});


// Build the app from source code
gulp.task('build', ['resources', 'bundle']);

// Build and start watching for modifications
gulp.task('build:watch', cb => {
  watch = true;
  gulp.watch([
    'src/*.js',
    'src/components/*.js',
    'src/templates*/**'
  ], ['build']);
  cb();
});

gulp.task("serve", bg("node", "build/server.js"));

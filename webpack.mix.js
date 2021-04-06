const mix = require('laravel-mix');


var conf = mix.setPublicPath('public')
  .setResourceRoot('../') // Turns assets paths in css relative to css file
  .sass('resources/sass/frontend/app.scss', 'css/frontend.css')
  .js('resources/js/frontend/app.js', 'js/frontend.js')
  .vue({
    version: 2,
    extractStyles : 'css/vue-comp.css',
    // globalStyles: true,
  })
 ;

if (mix.inProduction()) {
  conf.version()
    .options({
      // Optimize JS minification process
      terser: {
        cache: true,
        parallel: true,
        sourceMap: true
      }
    });
} else {
  // Uses inline source-maps on development
  conf.webpackConfig({
    devtool: 'inline-source-map'
  });
}

// conf.dumpWebpackConfig();

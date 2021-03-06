/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // '@angular/material': 'npm:.2.0.0-alpha.9-3@@angular/material/material.umd.js',
      // '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      // other libraries
      // 'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      // 'ng-lightning/ng-lightning': 'npm:ng-lightning/bundles/ng-lightning.umd.js',
      'clarity-angular': 'npm:clarity-angular',
      'angular2-highcharts': 'npm:angular2-highcharts',
      'highcharts': 'npm:highcharts/highcharts.js',
      // 'tether': 'npm:tether/dist/js/tether.js',
      'rxjs': 'npm:rxjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      'clarity-angular': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-highcharts': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'rxjs': {
        main: './bundles/Rx.js',
        defaultExtension: 'js'
      }

      // 'angular2-in-memory-web-api': {
      //   main: './index.js',
      //   defaultExtension: 'js'
      // },

    }
  });
})(this);
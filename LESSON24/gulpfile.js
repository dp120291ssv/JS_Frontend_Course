const {series, src, dest, watch} = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');


function copyHtml() {
    return src('./src/index.html')
        .pipe(dest('./dist'))
  }

function copyJs() {
    return src('./src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('./dist'))
}

function cleanDist(){
    return src('./dist', {read: false})
        .pipe(clean());
}

function copyVendorJs() {
    return src('./src/jquery.justifiedGallery.min.js')
        .pipe(concat('vendor.js'))
        .pipe(dest('./dist'))
}

function copyVendorCss() {
    return src('./src/justifiedGallery.min.css')
        .pipe(concat('vendor.css'))
        .pipe(dest('./dist'))
}

function watchFiles(){
    watch('./src/**/*.js', function rebuild() {
        return copyJs();
    });
    watch('./src/**/*.html', function rebuild(){
        return copyHtml();
    });
}
  
  module.exports = {
      build: series(cleanDist, copyHtml, copyVendorJs, copyVendorCss, copyJs),
      serve: series(cleanDist, copyHtml, copyVendorJs, copyVendorCss, copyJs, watchFiles)
  }

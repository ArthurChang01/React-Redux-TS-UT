var gulp = require("gulp");

var path = {
    nodeRoot: './node_modules/',
    JsRoot: './',
    CssRoot: './Css/',
    FontRoot: './Font/'
};

gulp.task('moveJsFiles', function() {
    return gulp.src([
            path.nodeRoot + 'es6-promise/dist/*.js',
            path.nodeRoot + 'object-assign/index.js',
            path.nodeRoot + 'jquery/dist/*.js',
            path.nodeRoot + 'bootstrap/dist/js/bootstrap.js',
            path.nodeRoot + 'react/dist/*.js',
            path.nodeRoot + 'react-dom/dist/*.js',
            path.nodeRoot + 'react-redux/dist/*.js',
            path.nodeRoot + 'react-router/umd/*.js',
            path.nodeRoot + 'redux/dist/*.js',
            path.nodeRoot + 'redux-thunk/dist/*.js',
            path.nodeRoot + 'toastr/build/*.js',
            path.nodeRoot + 'whatwg-fetch/fetch.js',
            path.nodeRoot + 'jquery-validation/dist/*.js',
            path.nodeRoot + 'jquery-validation-unobtrusive/jquery.validation.unobtrusive.js',
            path.nodeRoot + 'mocha/mocha.js',
            path.nodeRoot + 'chai/chai.js'
        ], { base: path.nodeRoot })
        .pipe(gulp.dest(path.JsRoot + 'vendors/'));
});

const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const svgSprite = require('gulp-svg-sprite');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const include = require('gulp-include');
const clean = require('gulp-clean');
const webpack = require('webpack-stream')
const babel = require('gulp-babel')
// browserify = require('browserify'),
function page() {
    return src('app/pages/*.html')
        .pipe(include({
            includePaths: 'app/components'
        }))
        .pipe(dest('app'))
        .pipe(browserSync.stream())
}
function fonts() {
    return src('app/fonts/src/*.*')
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(src('app/fonts/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('app/fonts'))
}
function images() {
    return src(['app/images/src/artianImg/*.*', '!app/images/src/artianImg/*.svg'])
        .pipe(newer('app/images/dist/artianImg'))
        .pipe(avif({ quality: 50 }))
        .pipe(src('app/images/src/artianImg/*.*'))
        .pipe(newer('app/images/dist/artianImg'))
        .pipe(webp())
        .pipe(src('app/images/src/artianImg/*.*'))
        .pipe(newer('app/images/dist/artianImg'))
        .pipe(imagemin())
        .pipe(dest('app/images/dist/artianImg'))
}
function miaImages() {
    return src(['app/images/src/miaImg/*.*', '!app/images/src/miaImg/*.svg'])
        .pipe(src('app/images/src/miaImg/*.*'))
        .pipe(newer('app/images/dist/miaImg'))
        .pipe(webp())
        .pipe(imagemin())
        .pipe(dest('app/images/dist/miaImg'))
}
function disaerImages() {
    return src(['app/images/src/disaerImg/*.*', '!app/images/src/miaImg/*.svg'])
        .pipe(src('app/images/src/disaerImg/*.*'))
        .pipe(newer('app/images/dist/disaerImg'))
        .pipe(webp())
        .pipe(imagemin())
        .pipe(dest('app/images/dist/disaerImg'))
}
function autoImages() {
    return src(['app/images/src/autoImg/*.*', '!app/images/src/autoImg/*.svg'])
        .pipe(src('app/images/src/autoImg/*.*'))
        .pipe(newer('app/images/dist/autoImg'))
        .pipe(webp())
        .pipe(imagemin())
        .pipe(dest('app/images/dist/autoImg'))
}
function capadociaImages() {
    return src(['app/images/src/capadociaImg/*.*', '!app/images/src/capadociaImg/*.svg'])
        .pipe(src('app/images/src/capadociaImg/*.*'))
        .pipe(newer('app/images/dist/capadociaImg'))
        .pipe(webp())
        .pipe(imagemin())
        .pipe(dest('app/images/dist/capadociaImg'))
}
function luxImages() {
    return src(['app/images/src/luxImg/*.*', '!app/images/src/luxImg/*.svg'])
        .pipe(src('app/images/src/luxImg/*.*'))
        .pipe(newer('app/images/dist/luxImg'))
        .pipe(webp())
        .pipe(imagemin())
        .pipe(dest('app/images/dist/luxImg'))
}
function pizzaImages() {
    return src(['app/images/src/pizzaImg/*.*', '!app/images/src/pizzaImg/*.svg'])
        .pipe(src('app/images/src/pizzaImg/*.*'))
        .pipe(newer('app/images/dist/pizzaImg'))
        .pipe(webp())
        .pipe(imagemin())
        .pipe(dest('app/images/dist/pizzaImg'))
}
function sprite() {
    return src('app/images/dist/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                    example: true,

                }
            }
        }))
        .pipe(dest('app/images/dist'))
}

function scripts() {
    return src('app/js/*.js')

        .pipe(webpack(require('./webpack.config.js')))
        // .pipe(concat('main.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest('./dist/js'))
        .pipe(browserSync.stream())
}
function styles() {
    return src(['app/scss/style.scss', 'app/scss/_global.scss'])
        .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function miaStyles() {
    return src(['app/scss/mia**/*.scss'])
        .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
        .pipe(concat('mia.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function disaerStyles() {
    return src(['app/scss/disaer/**/*.scss'])
        .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
        .pipe(concat('disaer.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function autoStyles() {
    return src(['app/scss/auto.scss'])
        .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
        .pipe(concat('auto.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function capadociaStyles() {
    return src(['app/scss/capadocia.scss'])
        .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
        .pipe(concat('capadocia.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function luxStyles() {
    return src(['app/scss/lux.scss'])
        .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
        .pipe(concat('lux.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function pizzaStyles() {
    return src(['app/scss/pizza**/*.scss'])
        .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
        .pipe(concat('pizza.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function watching() {
    watch(['app/scss/style.scss'], styles)
    watch(['app/scss/mia**/*.scss'], miaStyles)
    watch(['app/scss/disaer**/*.scss'], disaerStyles)
    watch(['app/scss/auto.scss'], autoStyles)
    watch(['app/scss/capadocia.scss'], capadociaStyles)
    watch(['app/scss/lux.scss'], luxStyles)
    watch(['app/scss/pizza**/*.scss'], pizzaStyles)
    watch(['app/images/src'], images)
    watch(['app/js/*.js'], scripts)
    watch(['app/components/*', 'app/pages/*'], page)
    watch(['app**/*.html']).on('change', browserSync.reload)
}
function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}
function cleanDist() {
    return src('dist')
        .pipe(clean())
}
function building() {
    return src([
        'app/css/style.min.css',
        'app/css/mia.min.css',
        'app/css/disaer.min.css',
        'app/css/auto.min.css',
        'app/css/pizza.min.css',
        'app/css/capadocia.min.css',
        'app/js/main.min.js',
        'app/css/lux.min.css',
        'app/images/dist/*.*',
        '!app/images/dist/*.svg',
        // 'app/images/dist/sprite.svg',
        'app/fonts/*.*',
        'app/**/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'))
}


exports.styles = styles
exports.miaStyles = miaStyles
exports.disaerStyles = disaerStyles
exports.autoStyles = autoStyles
exports.capadociaStyles = capadociaStyles
exports.luxStyles = luxStyles
exports.pizzaStyle = pizzaStyles
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync
exports.images = images
exports.disaerImages = disaerImages
exports.miaImages = miaImages
exports.autoImages = autoImages
exports.capadociaImages = capadociaImages
exports.luxImages = luxImages
exports.pizzaImages = pizzaImages
exports.page = page
exports.sprite = sprite
exports.fonts = fonts
exports.build = series(cleanDist, building)

exports.default = parallel(styles, fonts, capadociaStyles, luxStyles, pizzaStyles, pizzaImages, luxImages, miaStyles, disaerStyles, autoStyles, autoImages, disaerImages, capadociaImages, miaImages, images, scripts, browsersync, page, watching);
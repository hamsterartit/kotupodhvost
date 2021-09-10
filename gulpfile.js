const gulp = require('gulp'),
    browserSync = require('browser-sync')
scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    groupMedia = require('gulp-group-css-media-queries'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    webpack = require('webpack-stream'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webpHtml = require('gulp-webp-html'),
    webpCss = require('gulp-webp-css'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter'),
    fileInclude = require('gulp-file-include'),
    concat = require('gulp-concat'),
    realFavicon = require('gulp-real-favicon'),
    svgSprite = require('gulp-svg-sprite'),
    fs = require('fs'),
    del = require('del');

const FAVICON_DATA_FILE = 'faviconData.json';
const srcFldr = 'app';
const prjFldr = 'dist';

const path = {
    src: {
        html: srcFldr + '/templates/*.html',
        js: srcFldr + '/js/main.js',
        img: srcFldr + '/img/*',
        stylesImg: srcFldr + '/styles/img/*',
        css: srcFldr + '/styles/scss/styles.scss',
        fonts: srcFldr + '/styles/fonts/',
        icons: srcFldr + '/styles/icons/*.svg',
    },
    build: {
        html: prjFldr + '/',
        js: prjFldr + '/js/',
        img: prjFldr + '/img/',
        stylesImg: prjFldr + '/styles/img/',
        styles: prjFldr + '/styles/',
        css: prjFldr + '/styles/css/',
        fonts: prjFldr + '/styles/fonts/',
        icons: prjFldr + '/styles/icons/',
    },
    watch: {
        html: srcFldr + '/templates/**/*.html',
        js: srcFldr + '/js/**/*.js',
        css: srcFldr + '/styles/scss/**/*.scss',
        img: srcFldr + '/img/**/*',
        stylesImg: prjFldr + '/styles/img/**/*',
    },
};

/* Build HTML ================================================================================================================= */
function html() {
    return gulp.src(path.src.html)
        .pipe(fileInclude())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
}

/* Build CSS ================================================================================================================= */
function css() {
    return gulp.src(path.src.css)
        .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
        .pipe(groupMedia())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(cleanCss())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
}

/* Build JS ================================================================================================================= */
function js() {
    return gulp.src(path.src.js)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

/* Build Images ================================================================================================================= */
function img() {
    gulp.src(path.src.stylesImg)
        .pipe(gulp.dest(path.build.stylesImg));
    return gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream());
}

/* TTF to WOFF & WOOF2 ================================================================================================================= */
function otf2ttf() {
    return gulp.src([path.src.fonts + '*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(gulp.dest(path.src.fonts));
}

function fonts() {
    gulp.src(path.src.fonts + '*.ttf')
        .pipe(ttf2woff())
        .pipe(gulp.dest(path.build.fonts));
    return gulp.src(path.src.fonts + '*.ttf')
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.stream());
}

/* Write font style to scss ================================================================================================================= */
function writeFontsStyle(cb) {
    let file_content = fs.readFileSync(srcFldr + '/styles/scss/base/_fonts.scss');
    if (file_content == '') {
        fs.writeFile(srcFldr + '/styles/scss/base/_fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(srcFldr + '/styles/scss/base/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        });
    }
    cb();
}

/* Favicon ================================================================================================================= */
function generateFav(cb) {
    realFavicon.generateFavicon({
        masterPicture: 'favicon.png',
        dest: prjFldr,
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'noChange',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                }
            },
            desktopBrowser: {
                design: 'raw'
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#ffffff',
                manifest: {
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: false,
            htmlCodeFile: true,
            usePathAsIs: false
        },
        markupFile: FAVICON_DATA_FILE
    }, function () {
        gulp.src(prjFldr + '/html_code.html')
            .pipe(gulp.dest(srcFldr + '/templates/page-set/'));
        del([prjFldr + '/html_code.html']);
        cb();
    });
}

/* Svg sprite ================================================================================================================= */
function svgsprite() {
    return gulp.src([path.src.icons])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../icons.svg',
                    example: true
                },
                css: {
                    render: {
                        scss: true
                    },
                    example: true
                },
                symbol: {
                    example: true
                }
            }
        }))
        .pipe(gulp.dest(path.build.icons));
}

/* Run server ================================================================================================================= */
function browserSyncFnc(cb) {
    browserSync.init({
        server: {
            baseDir: './' + prjFldr + '/'
        },
        notify: false
    });
    cb();
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], img);
}

function deleteBuild() {
    return del([prjFldr + '/*.html', path.build.styles, path.build.js, path.build.img]);
}

const build = gulp.series(deleteBuild, gulp.parallel(css, js, fonts, img, html), writeFontsStyle);
const runServer = gulp.parallel(build, watchFiles, browserSyncFnc);

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.otf2ttf = otf2ttf;
exports.fonts = fonts;
exports.writeFontsStyle = writeFontsStyle;

exports.generateFav = generateFav;

exports.svgsprite = svgsprite;

exports.deleteBuild = deleteBuild;
exports.watchFiles = watchFiles;

exports.build = build;
exports.runServer = runServer;
exports.default = runServer;

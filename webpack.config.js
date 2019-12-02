const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/extractCSS.js');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts')
 
const PATHS = {
    source: path.resolve(__dirname + '/src/pages'),
    build: path.resolve (__dirname + '/build')
};

const pages = [
    // 'Colors_&_Type',
    // 'form_elements',
    'Prom_tara'
];
 
const common = merge([
    {  
    resolve: {
        alias: {
          src: path.resolve(__dirname, 'src'),
          node_modules: path.resolve(__dirname, 'node_modules')
        }
      },

    entry: (function() {
        const entrys = {};
        pages.forEach(function(item) {
            entrys[item] = PATHS.source + '/' + item + '/' + item +'.js';
            });
        return entrys;
    }()),

    output: {
        path: PATHS.build,
        filename: 'js/[name].js'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: pages[0] + '/index.html',
        //     template: PATHS.source + '/' + pages[0] + '/' + pages[0] + '.pug',
        //     chunks: ['Colors_&_Type'],
        // }),

        new HtmlWebpackPlugin({
            filename: pages[0] + '/index.html',
            template: PATHS.source + '/' + pages[0] + '/' + pages[0] + '.pug',
            chunks: ['Prom_tara'],
        }),
    ],
    }, 
    pug(),
    images(),
    fonts(),
]);

module.exports = function(env) {
    if(env === 'production') {
        return merge([
            common,
            extractCSS(),
        ]);
    }
    if(env === 'development') {
        return merge([
            common,
            devserver(),
            css(),
            sass()
        ])
    }
};




















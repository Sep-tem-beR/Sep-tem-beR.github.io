const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/extractCSS.js');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
 
const PATHS = {
    source: path.resolve(__dirname + '/src/pages'),
    build: path.resolve (__dirname + '/build')
};
 
const common = merge([
    {  
    resolve: {
        alias: {
          src: path.resolve(__dirname, 'src')
        }
      },

    entry: {
        'index': PATHS.source + '/Colors_&_Type/Colors_&_Type.js',
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.source + '/Colors_&_Type/Colors_&_Type.pug',
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




















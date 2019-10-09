module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    include: [/fonts/],
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }, 
            ]
        }
    };
};
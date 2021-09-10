const path = require('path');
const outputDir = path.resolve(__dirname, 'dist');
module.exports = {
    // entry: path.resolve(__dirname, '/app/src'),
    context: __dirname + '/app/js',
    output: {
        path: outputDir + '/js',
        filename: 'main.js'
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: require.resolve("babel-loader"),
                query: {
                    presets: [
                        ["@babel/preset-env", { modules: false }]
                    ]
                }
            }
        }]
    }
};

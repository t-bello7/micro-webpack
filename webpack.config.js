const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    plugins : [
        new HtmlWebpackPlugin ({
            template: './src/index.html',
        })
    ],
    output: {
        filename: 'output.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
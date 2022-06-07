const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: './src/main.js',
    plugins : [   
        new HtmlWebpackPlugin ({
            template: './src/index.html',
        }), 
        new BundleAnalyzerPlugin()
    ],
    output: {
        filename: 'output.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer : {
        static: './dist',
        port: 9000
    },
    mode: 'development'
}
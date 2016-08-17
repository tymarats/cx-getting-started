const webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),    
    path = require('path');

module.exports = {
    resolve: {
        alias: {
            cx: path.join(__dirname, 'node_modules/cx-core/src/'),
            app: path.join(__dirname, 'app')
        }
    },

    module: {
        loaders: [{
            test: /\.js$/,
            // Add any ES6 based libraries here:
            include: /(app|cx-core|cx)/,
            loader: 'babel',
            query: {
                "cacheDirectory": true,
                "cacheIdentifier": "v1",
                "presets": ["es2015-loose", "stage-0"],
                "plugins": [
                    "transform-decorators-legacy",
                    ["transform-es2015-classes", {"loose": true}],
                    ["babel-plugin-transform-react-jsx", {"pragma": "VDOM.createElement"}],
                    "babel-plugin-cx"
                ]
            }
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]            
        }, {
            test: /\.css$/,
            loader: ["style", "css"]            
        }]
    },

    entry: {
        app: path.join(__dirname, 'app/index.js')
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.html')
        })        
    ],

    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: '/'
    },

    devtool: 'eval',
    devServer: {
        hot: true,
        port: 8086,
        noInfo: false,
        inline: true,
        historyApiFallback: true
    }
};

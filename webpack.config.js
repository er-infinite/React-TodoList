var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map', //line numbers for errors
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src' //folder where webpack is going to run
    ],
    output: {
        path: path.join(__dirname, 'public'), //where webpack will output
        filename: 'bundle.js'
    },
    resolve: { //location where webpack is going to look to bundle files
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js'] //extensions in which webpack will expect
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
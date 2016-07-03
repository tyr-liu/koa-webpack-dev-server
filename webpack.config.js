var path = require('path');
var webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'client/src'),
    build: path.join(__dirname, 'client/build')
};

module.exports = {
    entry: PATHS.app,
    output: {
        publicPath: 'http://localhost:3001/build',
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        root: [PATHS.app],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css?modules&camelCase'],
            include: PATHS.app
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            include: PATHS.app
        }]
    }
};

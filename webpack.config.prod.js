var path = require('path');

const PATHS = {
    app: path.join(__dirname, 'client/src'),
    build: path.join(__dirname, 'client/build')
};

module.exports = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        root: PATHS.app,
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
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

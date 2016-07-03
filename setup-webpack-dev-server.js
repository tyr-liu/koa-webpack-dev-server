'use strict';
const webpack = require('webpack');
const devConfig = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');
const proxy = require('koa-proxy');
const convert = require('koa-convert');

const compile = webpack(devConfig);

module.exports = function (app) {
    app.use(convert(proxy({
        host: 'http://localhost:3001',
        match: /\/build/
    })));

    var server = new WebpackDevServer(compile, {
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: "http://localhost:3001/build/",
        stats: { colors: true }
    });

    server.listen('3001', 'localhost', function (err) {
        if(err) {
            console.log(err);
        }
    })
};

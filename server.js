'use strict';
const path = require('path');
const koa = require('koa');
const views = require('koa-view');
const convert = require('koa-convert');
const router = require('koa-router')();
const co = require('co');
const setUpWebpackDevServer = require('./setup-webpack-dev-server');
const app =  new koa();

if(process.env.NODE_ENV == 'development') {
    setUpWebpackDevServer(app);
}

app.use(convert(views(path.join(__dirname, 'client'))));
router.get('/', co.wrap(function*(ctx) {
    yield ctx.render('./index');
}));
app.use(router.routes());

app.listen(3000);

module.exports = app;


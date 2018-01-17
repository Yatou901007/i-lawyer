'use strict';

const express = require('express');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const nj = require('nornj');
const njExpressEngine = require('nornj/tools/expressEngine');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const configs = require('../configs');
const app = express();

//启动webpack dev server

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//设置Express模板引擎
app.engine('html', njExpressEngine({
  delimiters: {
    start: '{%',
    end: '%}',
    extension: '$',
    prop: '##'
  },
  defaultLayout: 'default',
  layoutsDir: 'layout/'
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

//设置跨域访问
app.all('*', function(req, res, next) {
  const acao = req.headers.origin === 'http://localhost:8080' ||
               req.headers.origin === 'http://localhost:8081' ||
               req.headers.origin === 'http://localhost:8082' ||
               req.headers.origin === 'http://localhost:8083' ||
               req.headers.origin === 'http://localhost:8284' ||
               req.headers.origin === 'http://localhost:3000'
  if(acao){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, tranCode");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == "OPTIONS") res.send(200);
  else next();
});

// 首页接口
const home = require('./routes/home/home')
app.use('/atLawyer/', home)



let server = app.listen(18082, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


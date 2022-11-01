const express = require('express');
const indexRouter = require('./src/routes/index');
const errorHandler = require('./src/middlewares/error.middleware');
const pageNotFound = require('./src/middlewares/notfound.middleware');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('views', './views');
app.set('view engine', 'pug');
app.use(indexRouter);

app.use(express.static('public'));

app.use(errorHandler);
app.use(pageNotFound);

module.exports = app;
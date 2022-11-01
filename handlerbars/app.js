const express = require('express');
const {engine, create} = require('express-handlebars');
const indexRouter = require('./src/routes/index');
const errorHandler = require('./src/middlewares/error.middleware');
const pageNotFound = require('./src/middlewares/notfound.middleware');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const hbs = create({
  extname : '.hbs', 
  helpers: {
    moneyFormater : (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(price)
  }
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(indexRouter);

app.use(errorHandler);
app.use(pageNotFound);

module.exports = app;
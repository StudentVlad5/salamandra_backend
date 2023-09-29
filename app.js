const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { errorHandler } = require('./helpers');
const { routerAuth, routerMenu, routerAdmin, routerProduct } = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('images'));
app.use("/uploads", express.static(`${__dirname}/images`));

app.use('/api/auth', routerAuth);
app.use('/api/menu', routerMenu);
app.use('/api/product', routerProduct);
app.use('/api/admin', routerAdmin);

app.use((req, res) => {
  console.log('!!!!! APP (req, res) !!!!!!');
  res.status(404);
  res.json({ messages: 'ERRR JSONS' });
});

app.use(errorHandler);

module.exports = app;

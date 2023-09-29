const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
const { errorHandler } = require('./helpers');
const { routerAuth, routerMenu, routerAdmin, routerProduct } = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
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

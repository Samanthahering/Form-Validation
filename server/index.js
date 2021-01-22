//creating an app
const path = require('path');
const express = require('express');
const app = express();
const db = require('./db'); 

const port = process.env.PORT || 3000;

//logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

//static files
app.use(express.static(path.join(__dirname, '../public')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mount all routes onto api
app.use('/api', require('./api')); 

//sending index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//handling 500 errors
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
 

  db.sync()  // sync our database
  .then(function(){
    console.log('db is synced!')
    app.listen(port) // then start listening with our express server once we have synced
  })
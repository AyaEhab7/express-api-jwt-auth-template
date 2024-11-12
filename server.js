require('dotenv').config();
require('./Config/database');
const express = require('express');
const morgan = require('morgan');

//controllers:
const testJWTRouter = require('./controllers/test-jwt');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Routes go here
app.use('/test-jwt', testJWTRouter);


app.listen(3000, () => {
  console.log('The express app is ready!');
});
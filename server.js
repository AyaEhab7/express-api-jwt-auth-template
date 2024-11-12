require('dotenv').config();
require('./Config/database');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
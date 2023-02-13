const express = require('express');

const factsRouter = require('./facts');
const app = express();

app.use('/facts', factsRouter);

module.exports = app;
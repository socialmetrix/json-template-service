'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ST = require('stjs');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const result = ST
    .select(req.body.template)
    .transform(req.body.data)
    .root();

  res.json(result);
  console.log('')
});

const PORT = 80;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log(`Running ...`);

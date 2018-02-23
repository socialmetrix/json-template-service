'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ST = require('stjs');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  if (!req.body || (Object.keys(req.body).length === 0 && req.body.constructor === Object))
    return res.sendStatus(400)

  const result = ST
    .select(req.body.template)
    .transform(req.body.data)
    .root();

  res.json(result);
});

const PORT = 80;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log(`Running ...`);

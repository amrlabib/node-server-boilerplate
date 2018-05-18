// @flow

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const Log = require('./utils/log');


require('./config/db.js');

app.use(bodyParser.json());

function setDefaultResponseHeaders(res) {
  const defaultHeaders = config.responseHeaders;
  const keys = Object.keys(defaultHeaders);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    res.setHeader(key, defaultHeaders[key]);
  }
}


app.use((req, res, next) => {
  setDefaultResponseHeaders(res);

  Log.data(`----------------${req.url}----------------`);
  Log.data(`Request method: ${req.method}`);
  Log.data(`Request url: ${req.url}`);
  Log.data(`Request query: ${JSON.stringify(req.query)}`);
  Log.data(`Request body: ${JSON.stringify(req.body)}`);
  next();
});


require('./routes')(app);


app.listen(config.port, () => {
  Log.data(`Server listening on port: ${config.port}`);
});

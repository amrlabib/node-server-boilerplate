const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes')(app);
const debug = require('debug')('server');

app.listen(config.port, () => {
	debug(`Server listening on port: ${config.port}`);
});


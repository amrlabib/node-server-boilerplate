const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser')
const debug = require('debug')('server');

app.use(bodyParser.json());

app.use( (req,res,next) => {
	debug(`----------------${req.url}----------------`);
	debug(`Request method: ${req.method}`);
	debug(`Request url: ${req.url}`);
	debug(`Request query: ${JSON.stringify(req.query)}`);
	debug(`Request body: ${JSON.stringify(req.body)}`);
	debug('------------------------------------');
	next();
});


require('./routes')(app);

app.listen(config.port, () => {
	debug(`Server listening on port: ${config.port}`);
});


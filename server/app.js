const express = require('express');
const app = express();
const config = require('./config');

const debug = require('debug')('server');

app.use( (req,res,next) => {
	debug(`Request method: ${req.method}`);
	next();
});


require('./routes')(app);

app.listen(config.port, () => {
	debug(`Server listening on port: ${config.port}`);
});


const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const Log = require('./services/log');

app.use(bodyParser.json());

app.use( (req,res,next) => {
	res.setHeader('Content-Type', 'application/json');

	Log.data(`----------------${req.url}----------------`);
	Log.data(`Request method: ${req.method}`);
	Log.data(`Request url: ${req.url}`);
	Log.data(`Request query: ${JSON.stringify(req.query)}`);
	Log.data(`Request body: ${JSON.stringify(req.body)}`);
	Log.data('------------------------------------');
	next();
});


require('./routes')(app);



app.listen(config.port, () => {
	Log.data(`Server listening on port: ${config.port}`);
});


const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes')(app);

app.listen(config.port, () => {
	console.log(`Server listening on port: ${config.port}`);
});


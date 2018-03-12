const config = require('./index.js');
const mongoose = require('mongoose');


class DB { 
	constructor() {
		mongoose.connect(config.db.mongo , (err) => {
			if(err) {
				console.log(err);
				return;
			}
			console.log("connected to mongoDb!");
		});		
	}
}

module.exports = new DB();
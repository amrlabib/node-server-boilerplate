const Request = require('../services/request.js');

module.exports = (app) => {
	app.get('/' , (req, res) => {
		const url = 'http://localhost:3001/users';
		
		Request.get(url)
		.then((data) => {
			Request.sendResponse(res, data);
		})
		.catch((error) => {
			Request.sendResponse(res, {} , error);
		});
	});
}
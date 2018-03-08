const Request = require('../services/request.js');

module.exports = (app) => {
	app.get('/' , (req, res) => {
		const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

		Request.get(url)
		.then((data) => {
			Request.sendResponse(res, data);
		})
		.catch((error) => {
			Request.sendResponse(res, {} , error);
		});
	});
}
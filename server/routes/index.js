const request = require('../services/request.js');

module.exports = (app) => {
	app.get('/' , (req, res) => {
		const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

		request.get(url)
		.then((data) => {
			request.sendResponse(res, data);
		})
		.catch((error) => {
			request.sendResponse(res, {} , error);
		});
	});
}
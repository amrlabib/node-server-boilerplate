const request = require('../services/request.js');

module.exports = (app) => {
	app.get('/' , (req, res) => {
		const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

		request.get(url)
		.then((data) => {
			console.log(data);
			res.send(data);
		})
		.catch((error) => {
			res.send(error);
		});
	});
}
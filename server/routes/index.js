module.exports = (app) => {
	app.get('/' , (req, res) => {
		res.send("Hello from node server!");
	});
}
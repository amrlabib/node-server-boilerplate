module.exports = function(promise) {
	return promise.then((res) => ({ res }))
	.catch((err) => ({err}));
}
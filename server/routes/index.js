const MoviesRoutes = require('./movies');

module.exports = function routes(app) {
  MoviesRoutes(app);
};

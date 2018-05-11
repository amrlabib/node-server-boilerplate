// @flow

const MoviesRoutes = require('./movies');

module.exports = function routes(app: Object) {
  MoviesRoutes(app);
};

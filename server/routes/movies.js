const Request = require('../services/request');
const Movies = require('../controllers/movies');
const apiUrl = require('../config').api;

module.exports = function MoviesRoutes(app) {
  // Get all Movies
  app.get(`${apiUrl}/movies`, (req, res) => {
    const { query } = req;
    Movies.all(query)
      .then((data) => {
        Request.sendResponse(res, data);
      })
      .catch((error) => {
        Request.sendResponse(res, {}, error);
      });
  });


  // Get one movie
  app.get(`${apiUrl}/movie/:id`, (req, res) => {
    const movieId = req.params.id;
    Movies.one(movieId)
      .then((data) => {
        Request.sendResponse(res, data);
      })
      .catch((error) => {
        Request.sendResponse(res, {}, error);
      });
  });

  // Add movie
  app.post(`${apiUrl}/movies/`, (req, res) => {
    const movie = req.body;
    Movies.add(movie)
      .then((data) => {
        Request.sendResponse(res, data);
      })
      .catch((error) => {
        Request.sendResponse(res, {}, error);
      });
  });


  // Delete movie
  app.delete(`${apiUrl}/movies/:id`, (req, res) => {
    const movieId = req.params.id;
    Movies.delete(movieId)
      .then((data) => {
        Request.sendResponse(res, data);
      })
      .catch((error) => {
        Request.sendResponse(res, {}, error);
      });
  });


  // Update movie
  app.put(`${apiUrl}/movies/:id`, (req, res) => {
    const movieId = req.params.id;
    const movie = req.body;
    Movies.update(movieId, movie)
      .then((data) => {
        Request.sendResponse(res, data);
      })
      .catch((error) => {
        Request.sendResponse(res, {}, error);
      });
  });
};

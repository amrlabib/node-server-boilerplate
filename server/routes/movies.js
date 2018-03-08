const Request = require('../services/request.js');
const Movies = require('../controllers/Movies');
const apiUrl = require('../config').api;

module.exports = function(app) {

    //Get all Movies
    app.get(`${apiUrl}/movies`, (req, res) => {
        Movies.all()
            .then((data) => {
                Request.sendResponse(res, data);
            })
            .catch((error) => {
                Request.sendResponse(res, {}, error);
            });
    });


    //Get one movie
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

    //Post movie
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


    //Delete movie
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


    //Update movie
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
}
// @flow

const Request = require('../utils/request');
const Movie = require('../models/movie.js');
const awaitHandler = require('../utils/awaitHandler');

const MOVIES_API = 'http://localhost:3001/movies';

class Movies {
  static async all(query: Object) {
    const url = MOVIES_API;
    let result = await Request.get(url);

    const filter = query.search || query.filter;
    if (filter) {
      result = result.filter(item => item.name.indexOf(filter) > -1);
    }

    return result;
  }

  static async one(id: string) {
    const url = `${MOVIES_API}/${id}`;
    const result = await Request.get(url);

    return result;
  }

  static async add(data: Object) {
    const url = `${MOVIES_API}`;
    const postMovie = await awaitHandler(Request.post(url, data));
    if (postMovie.err) {
      throw new Error(postMovie.err.message);
    }

    const newMovie = new Movie(data);
    const addMovie = await awaitHandler(newMovie.save());

    if (addMovie.err) {
      throw new Error(addMovie.err.message);
    }

    return addMovie.res;
  }

  static async delete(id: string) {
    const url = `${MOVIES_API}/${id}`;
    const result = await Request.delete(url);

    return result;
  }

  static async update(id: string, data: Object) {
    const url = `${MOVIES_API}/${id}`;
    const result = await Request.put(url, data);

    return result;
  }
}

module.exports = Movies;

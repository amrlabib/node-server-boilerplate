const Request = require('../services/request');
const MOVIES_API = 'http://localhost:3001/movies';

class Movies {
	static async all() {
		const url = MOVIES_API;
		const result = await Request.get(url);	

		return result;
	}

	static async one(id) {
		const url = `${MOVIES_API}/${id}`;
		const result = await Request.get(url);

		return result;
	}

	static async add(data) {
		const url = `${MOVIES_API}`;
		const result = await Request.post(url, data);

		return result;
	}

	static async delete(id) {
		const url = `${MOVIES_API}/${id}`;
		const result = await Request.delete(url);

		return result;
	}

	static async update(id, data) {
		const url = `${MOVIES_API}/${id}`;
		const result = await Request.put(url , data);

		return result;
	}
}

module.exports = Movies;
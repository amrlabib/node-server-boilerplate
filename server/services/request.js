const axios = require('axios');

module.exports = {
    request: (url, method, reqHeaders, reqBody) => {
        const headers = {
            'content-type': 'application/json',
            ...reqHeaders,
        }

        let data = {};
        if (method == 'POST' || method == 'PUT') {
            data = reqBody;
        }

        return axios({
                method,
                url,
                headers,
                data,
            })
            .then((res) => {
                return Promise.resolve(res.data);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    },
    get: function(url, reqHeader) {
        return this.request(url, 'GET', reqHeader);
    },
    post: function(url, reqHeader, reqBody) {
        return this.request(url, 'POST', reqHeader, reqBody);
    },
    put: function(url, reqHeader, reqBody) {
        return this.request(url, 'PUT', reqHeader, reqBody);
    },
    response: (req, data) => {
    	
    }

}
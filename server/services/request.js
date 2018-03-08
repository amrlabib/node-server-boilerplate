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
            	const responseError = new Error();
            	error.code = 500;
            	responseError.message = 'Something went wrong!';
            	if (error.response) {
            		const errMessage = error.response.data.message;
			      	responseError.code = error.response.status;
			      	if(errMessage) {
			      		responseError.message = errMessage;
			      	}
			    } else if (error.request) {
			      console.log(error.request);
			    } else {
			      if(error.message) {
			      	responseError.message = error.message;
			      }
			    }
                return Promise.reject(responseError);
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
    sendResponse: (res, data, error) => {
    	const finalResponse = {
    		status: 'success',
    		message: '',
    		data: data || {},
    	};

    	if (error) {
    		finalResponse.status = 'error';
    		finalResponse.message = error.message;
    		res.status(error.code).send(finalResponse);
    	} else {
    		res.send(finalResponse);
    	}
    }

}
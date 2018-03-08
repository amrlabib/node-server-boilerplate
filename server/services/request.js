const axios = require('axios');
const Log = require('./log.js');

class Request {
    static request(url, method, reqHeaders, reqBody) {
        const headers = {
            'content-type': 'application/json',
            ...reqHeaders,
        }

        let data = {};
        if (method == 'POST' || method == 'PUT') {
            data = reqBody;
        }

        const reqObj = {
            method,
            url,
            headers,
            data,
        };

        Log.data(reqObj);
        return axios(reqObj)
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
                    if (errMessage) {
                        responseError.message = errMessage;
                    }
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    if (error.message) {
                        responseError.message = error.message;
                    }
                }
                Log.error(responseError);
                return Promise.reject(responseError);
            });
    }

    static get(url, reqHeader) {
        return Request.request(url, 'GET', reqHeader);
    }

    static post(url, reqHeader, reqBody) {
        return Request.request(url, 'POST', reqHeader, reqBody);
    }

    static put(url, reqHeader, reqBody) {
        return Request.request(url, 'PUT', reqHeader, reqBody);
    }

    static sendResponse(res, data, error){
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
            Log.success(finalResponse);
            res.send(finalResponse);
        }
    }

}

module.exports = Request;
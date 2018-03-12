module.exports = {
    port: 3000,
    api: '/api/v1',
    db: {
        mongo: 'mongodb://admin:1234@ds125126.mlab.com:25126/node-server-test',
    },
    requestHeaders: {
        'content-type': 'application/json',
    },
    responseHeaders: {
        'content-type': 'application/json',
    },
}
// @flow

module.exports = {
  port: 8080,
  api: '/api/v1',
  db: {
    mongo: 'mongodb://admin:1234@ds125126.mlab.com:25126/node-server-test',
  },
  requestHeaders: {
    'content-type': 'application/json',
  },
  responseHeaders: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
};

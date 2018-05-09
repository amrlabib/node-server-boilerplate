const config = require('./index.js');
const mongoose = require('mongoose');


class DB {
  constructor() {
    mongoose.connect(config.db.mongo, (err) => {
      if (err) {
        console.log(err); // eslint-disable-line
        return;
      }
      console.log('connected to mongoDb!'); // eslint-disable-line
    });
  }
}

module.exports = new DB();

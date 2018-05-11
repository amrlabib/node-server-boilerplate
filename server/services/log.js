// @flow

const { inspect } = require('util');
const debug = require('debug')('server');
const chalk = require('chalk');


class Log {
  static error(data: string | Object) {
    debug(chalk.red(inspect(data, { depth: null })));
  }

  static data(data: string | Object) {
    debug(chalk.white(inspect(data, { depth: null })));
  }

  static success(data: string | Object) {
    debug(chalk.green(inspect(data, { depth: null })));
  }
}

module.exports = Log;

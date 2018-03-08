const inspect = require('util').inspect;
const debug = require('debug')('server');
const chalk = require('chalk');


class Log { 
	static error(data) {
		debug(chalk.red( inspect(data, {depth:null}) ));
	}

	static data(data) {
		debug(chalk.white( inspect(data, {depth:null})) );
	}

	static success(data) {
		debug(chalk.green( inspect(data, {depth:null})) );
	}
}

module.exports = Log;
import chalk from 'chalk';
const chalk = require('chalk');

function colorfulMessage() {
    let pmsg = console.log(chalk.blue('Hello world!'));
    return pmsg;
}

module.exports = colorfulMessage;

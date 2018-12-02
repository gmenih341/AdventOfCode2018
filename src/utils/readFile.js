const {readFileSync} = require('fs');
const {dirname, resolve} = require('path');

module.exports = {
    readFileLinesToArray (fileName) {
        return readFileSync(resolve(dirname(process.argv[1]), fileName), {flag: 'r', encoding: 'utf-8'}).split('\n');
    },
};

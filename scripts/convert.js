const fs = require('fs');
const path = require('path');

const strings = fs.readFileSync(path.resolve(__dirname, '../data/strings.txt'), 'utf8').split('\n');

fs.writeFileSync(path.resolve(__dirname, '../src/strings.json'), JSON.stringify(strings, null, 2));
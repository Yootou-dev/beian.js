const sb = require('../dist/index.js').default;
const colors = require('colors');


try {
  console.log(sb('hello world'))
} catch (e) {
  console.log(colors.red(e.message));
}
try {
  sb('hello');
} catch (e) {
  console.log(colors.red(e.message));
}
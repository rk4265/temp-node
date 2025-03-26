// CommonJS, every file is module (by default)
// Modules



const names = require('./3-names-modules');
// console.log(names);
const sayHi = require('./4-utils');
const sayBy = names.sayBy
const data = require('./5-alternate-approach');
require('./6-mg')

sayHi('Rishi')
sayHi(names.a)
// sayHi(names.b)
sayBy(names.b);


const { readFileSync, writeFileSync, read } = require('fs')
// const fs = require('fs')
// fs.readFileSync


console.log("start");

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first);
// console.log(second);

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);
// writeFileSync('./content/result-sync.txt',`Hello World`);

writeFileSync(
  './content/result-sync.txt',
  `\nAppended content`,
  { flag: 'a' }
);
console.log('done with task');
console.log('starting  the new task');



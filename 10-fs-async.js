const { readFile, writeFile, read } = require('fs')

console.log("start");

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);

    return;
  }

  // console.log(result);
  const first = result;

  readFile('./content/second.txt', 'utf-8', (err, result) => {

    if (err) {
      console.log(err);

      return;
    }

    const second = result;

    writeFile('./content/result-async.txt', `here is the written data  ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log('done with this task');


      }

    )
  })
})
console.log('starting with new task')







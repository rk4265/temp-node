const { log } = require('console');
const os = require('os')

const user = os.userInfo();
console.log(user)

//system uptime in seconds

console.log(`System uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem0: os.totalmem(),
  freememo: os.freemem(),
}

console.log(currentOs);


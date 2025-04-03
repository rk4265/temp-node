const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request-event');
  res.end('Hello World')

})

server.listen(5025, () => {
  console.log("Server listeningon port 5025")
})
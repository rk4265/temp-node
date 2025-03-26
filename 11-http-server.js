console.log("Starting the App");

const http = require('http');


const server = http.createServer((req, res) => {
  // console.log(req);

  if (req.url === '/') {
    res.end('welcome to our home page')
    // res.end()
  }

  else if (req.url === '/about') {
    res.end('Here is our short history')
    // res.end()
  }

  else{

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Home</a>
    `)
} })

server.listen(6969)
console.log("Server is listening at port 6969")

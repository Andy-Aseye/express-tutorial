const http = require('http');

const server = http.createServer((req, res) =>{
 if(req.url === '/') {res.end('Welcome to our home page!')}
 if(req.url === '/about') {res.end('This is a history about our company.')}
 res.end(`<h1>Oops! sorry</h1>
          <h4>Try searching something else</h4>
 `)
})

server.listen(5000)
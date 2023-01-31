const http = require('http');

const server = http.createServer((req,res)=>{//1.st parameter represents incoming request,2.nd is response that we are sending back
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>Oops!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
  
})

server.listen(5000)
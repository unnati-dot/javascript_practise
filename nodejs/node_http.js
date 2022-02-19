const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("this is our homepage!");
    }
    if(req.url==='/about'){
        res.end("this is our about page!");
    }
})
console.log("hello");

server.listen(3000);
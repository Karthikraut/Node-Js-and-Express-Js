const http  =require('http');
const  server  = http.createServer(function(req,res){
    if(req.url == "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is my Home Page</p> </body> </html>');
        res.end();
    }
    else if(req.url == "/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is my ABOUT Page</p> </body> </html>');
        res.end();
    }
})
server.listen(3000);
console.log("Server is running on Port 3000.")
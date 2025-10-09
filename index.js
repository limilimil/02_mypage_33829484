var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<!DOCTYPE html><html><head><title>My web page</title></head><body><h1>My web page</h1> <h2>Something</h2><p>Welcome to my page.</p></body</html>");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 

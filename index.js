var http = require("http"); 
var fs = require("fs");
const port = 8000; 

http.createServer(function(req, res) { 
  fs.readFile("mypage.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("505 Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });

}).listen(port, function() { 
  console.log(`Node server is running on port ${port}...`); 
}); 

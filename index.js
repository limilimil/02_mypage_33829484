var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>My Web Page</title>
          </head>
          <body>
            <h1>My web page</h1> 
            <h2>About</h2>
            <p>My name is Liam, and I graduated from one of Canada's top business schools with really good grades.</p>
          </body>
        </html>`);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 

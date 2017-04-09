var http = require("http");
var fs = require('fs');




//This is the callback method, is called every time a user makes a request

//Request object has info about their request, response object is what we send back to them

function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");

// catch 404 and forward to error handler
function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 - Page not found");
    response.end();
}

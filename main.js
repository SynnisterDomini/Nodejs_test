var http = require("http");

http.createServer(function (request, response) {
    //send http header
    // http status: 200 (ok)
    // content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // send response body "'ello guvna"
    response.end("'ello guvna");
}).listen(8081);

//console should print that server is running
console.log('server running at http://127.9.9.1:8081/');
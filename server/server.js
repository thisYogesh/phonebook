var http = require('http');

http.createServer(function (request, response) {
    //response.setHeader("Content-Type", "text/plain");
    /*if (request.url != '/?yogesh') {
        response.writeHead(301, {
            location: "?yogesh"
        });
    }else if(request.url == '/?yogesh'){
        response.end("<h1>Started!!<h1> ?yogesh");
    }*/
    response.end("<h1>Started!!<h1>");
}).listen(100);

console.log('server listen at http://localhost:100 port');
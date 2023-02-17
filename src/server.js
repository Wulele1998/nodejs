const http = require("http");
const url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        let html = route(handle, pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(html);
        response.end();
    }
    http.createServer(onRequest).listen(8088);
    console.log("The server is listening on port 8088")
}

exports.start = start;
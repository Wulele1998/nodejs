const http = require("http")
const url = require("url")
const querystring = require("querystring")

function service1(request, response) {
    console.log("Hello Node.js");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Node.js");
}

function service2(request, response) {
    let arg = url.parse(request.url).query;
    console.log("arg: " + arg);
    // change string to an object
    let params = querystring.parse(arg);
    console.log("params: ", params)

    console.log("method: ", request.method);
    console.log("url: " + request.url);
    console.log("id: " + params.id);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Node.js");
}

exports.service1 = service1;
exports.service2 = service2;

// const server1 = http.createServer(service2);
// server1.listen(8088);
// console.log("The service runs on port 8088");
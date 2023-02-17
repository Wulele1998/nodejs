const http = require("http");
const server1 = require("./server1");


const server = http.createServer(server1.service1)
server.listen(8088);
console.log("The service runs on port 8088")

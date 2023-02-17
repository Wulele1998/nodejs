const server = require("./server");
const router = require("./router");
const requestHandler = require("./requestHandler");

let handle = {};
handle["/listCategory"] = requestHandler.listCategory;
handle["/listProduct"] = requestHandler.listProduct;
handle["/readFile"] = requestHandler.readFile;
handle["/writeFile"] = requestHandler.writeFile;

server.start(router.router, handle);

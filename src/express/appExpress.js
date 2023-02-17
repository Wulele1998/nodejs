const express = require("express");

// create the express obj
const app = express();

app.get("/", function (req, res) {
    res.send("Hello from express");
});

app.get("/index", function (req, res) {
    res.send("index page of express");
});

app.listen(8088);
console.log("The server is listening port 8088");
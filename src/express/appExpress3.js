const express = require("express");
const path = require("path");
const fs = require("fs")
const multer = require("multer")

let app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(multer({dest: path.join(__dirname, "tmp")}).array("image"));

function getExtensionName(fileName) {
    let index1 = fileName.lastIndexOf(".");
    let index2 = fileName.length;

    return fileName.substring(index1 + 1, index2);
}

app.post("/uploadPhoto", function (req, res) {
    let extensionName = getExtensionName(req.files[0].originalname);
    console.log()
    // set a random number as the image name
    let randomNumber = Math.ceil(Math.random() * 1_000_000);
    let randomFileName = randomNumber + "." + extensionName;

    // create the directory if the img directory not exits
    let imageFolder = __dirname + "/public/img";
    if (!fs.existsSync(imageFolder)) {
        fs.mkdirSync(imageFolder);
    }

    let imgFile = __dirname + "/public/img/" + randomFileName;
    let uploadTempFilePath = req.files[0].path;

    fs.readFile(uploadTempFilePath, (err, data) => {
        fs.writeFile(imgFile, data, (err) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end("<img src='/img/" + randomFileName + "' alt='error' />");
        });
    });
});

app.listen(8088);
console.log("The server runs on port 8088");

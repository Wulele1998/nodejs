const fs = require("fs")
function listCategory() {
    return "This is a category";
}

function listProduct() {
    return "This is a product";
}

function readFile() {
    return fs.readFileSync("text.txt");
}

function writeFile() {
    fs.writeFile("text.txt", "Hello World", (error) => {
        console.log(error);
    });
    return "write successfully"
}

exports.listCategory = listCategory;
exports.listProduct = listProduct;
exports.readFile = readFile;
exports.writeFile = writeFile;

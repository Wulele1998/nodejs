const mysql = require("mysql2")
let connection;

function openConnection() {
    connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "", // username of the database
        password: "", // password of the databases
        database: "" // database name
    });
    connection.connect();
}

function closeConnection() {
    connection.end();
}

function showAll() {
    openConnection();
    let sql = "SELECT * FROM category ORDER BY id ASC";
    connection.query(sql, function (err, results) {
        if (err) {
            console.log("[SELECT ERROR]: ", err.message);
            return;
        }
        if (results) {
            for (let i = 0; i < results.length; i++) {
                console.log("%d \t %s", results[i].id, results[i].name);
            }
        }
    });
    closeConnection();
}

function add(name) {
    openConnection();
    let params = [null, name];
    let sql = "INSERT INTO category values (?, ?)";
    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log("[INSERT ERROR]: " + err.message);
            return;
        }
        console.log("Insert success, the generated id is: ", result.insertId);
    });

    closeConnection();
}

function remove(id) {
    openConnection();
    let params = [id];
    let sql = "DELETE FROM category WHERE id = ?";
    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log("[REMOVE ERROR]: ", err.message);
            return;
        }
        console.log("Remove id = %d success", id);
    });
    closeConnection();
}

function get(id) {
    openConnection();
    let params = [id];
    let sql = "SELECT * FROM category WHERE id = ?";
    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log("[REMOVE ERROR]: ", err.message);
            return;
        }
        if (result.length !== 0) {
            let category = {id: result[0].id, name: result[0].name};
            console.log("Get Category: " + JSON.stringify(result));
        } else {
            console.log("Cannot find with id = %d", id);
        }
    });
    closeConnection();
}

function update(id, name) {
    openConnection();
    let params = [name, id];
    let sql = "UPDATE category SET name = ? WHERE id = ?";
    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log("[UPDATE ERROR]: ", err.message);
            return;
        }

        console.log("Update successful " + result.affectedRows);
    });
    closeConnection();
}

exports.showAll = showAll;
exports.add = add;
exports.remove = remove;
exports.get = get;
exports.update = update;

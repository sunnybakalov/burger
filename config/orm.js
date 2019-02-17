// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;

            callback(result);
        });
    },
    newBurger: function (tableInput, columnInput, val, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, columnInput, val], function (err, result) {
            if (err) throw err;

            callback(result);
        });
    },
    updateBurger: function (tableInput, columnInput, val, id, callback) {
        var queryString = "UPDATE ?? SET ?? =? WHERE ID =?";
        connection.query(queryString, [tableInput, columnInput, val, id], function (err, result) {
            if (err) throw err;

            callback(result);
        });
    }
};



// Export the orm object for the model (burger.js).
module.exports = orm;
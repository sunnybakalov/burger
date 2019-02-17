var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    newBurger: function(columns, vals, callback) {
        orm.newBurger("burgers", columns, vals, function(res) {
            callback(res);
        })
    },
    updateBurger: function(columnInput, values, id, callback) {
        orm.updateBurger("burgers", columnInput, values, id, function (res) {
            callback(res);
        })
    }
}


// Export the database functions for the controller (catsController.js).
module.exports = burger;
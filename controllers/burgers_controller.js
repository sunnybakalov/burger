var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burger: data
        };

        res.render("index", burgerObject)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.newBurger(["burger_name"], [req.body.name], function (result) {
        res.json({
            id: result.insertId
        })
    })
})

router.put("/api/burgers/:id", function (req, res) {
    burger.updateBurger(["devoured"], [req.body.devour], [req.params.id], function (result) {
        console.log(req.body.devour);
        console.log(req.params.id)
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})


// Export routes for server.js to use.
module.exports = router;
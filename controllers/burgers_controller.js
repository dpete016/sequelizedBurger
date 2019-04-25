var express = require("express");

var router = express.Router();

var burger = require("..//models/burger.js");

router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", { burger: data });
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("dp",req.body)
    burger.create([
        "burgername", "devoured"
    ], [req.body.burgername, req.body.devoured], 
        
     function(result) {
       res.redirect("/")
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
       res.json(true);
    });
});

router.delete("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

   
})

module.exports = router;
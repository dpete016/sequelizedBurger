var express = require("express");
var router = express.Router();
var db = require("../models")

router.get("/", function(req,res) {
    db.Burger.findAll()
        .then(function(burger) {
            console.log(burger)
            
        });
    
});

router.post("/api/burgers", function(req, res) {
    console.log("dp",req.body)
    db.Burger.create([
        "burgername", "devoured"
    ], [req.body.burgername, req.body.devoured], 
        
     function(result) {
       res.redirect("/")
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.Burger.update({
        devoured: req.body.devoured
    }, condition, function() {
       res.json(true);
    });
});

router.delete("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    db.Burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

   
})

module.exports = router;
var db = require("../models");
var express = require("express");
// console.log(db);
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Picture.findAll({}).then(function(dbExamples) {
      res.render("example", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.use(express.static("../public"))
  
  // Load example page and pass in an example by id
  app.get("/picture/:id", function(req, res) {
    db.Picture.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("picture", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

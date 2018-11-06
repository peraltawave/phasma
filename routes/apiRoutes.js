// *********************************************************************************
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
//
// source: 
// 15-sequelize\01-Activities\03-Day\13-Post-Author-Association\Solved\routes\post-api-routes.js
//
// also looking at 
// 15-sequelize\01-Activities\03-Day\12-Blog-CRUD\Solved\routes\api-routes.js
// *********************************************************************************


var db = require("../models"); // this models folder contains index.js animal.js and person.js 

  module.exports = function(app) {
    // Get all pet posts
    app.get("/", function(req, res) {
      db.petFinder_db.findAll({}).then(function(dbPets) {
        res.json(dbPets);
      });
    });

    // Create a new pet post
    app.post("/iFoundaPet", function(req, res) {
      db.petFinder_db.create(req.body).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // Delete an example by id
    app.delete("/iFoundaPet/:id", function(req, res) {
      db.petFinder_db.destroy({ where: { id: req.params.id } }).then(function(dbPost) {
        res.json(dbPost);
      });
    });
    
    // PUT route for updating posts
    app.put("/iFoundaPet", function(req, res) {
      db.petFinder_db.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbPost) {
        res.json(dbPost);
      });
    });


  };

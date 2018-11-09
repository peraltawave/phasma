// *********************************************************************************
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
//
// source: 
// 15-sequelize\01-Activities\03-Day\13-Post-Author-Association\Solved\routes\post-api-routes.js
//
// also looking at 
// 15-sequelize\01-Activities\03-Day\12-Blog-CRUD\Solved\routes\api-routes.js
// *********************************************************************************
// REAL CODE
var db = require("../models");
module.exports = function(app) {
  app.post("/iFoundAPet", function(req, res) {
    var body = req.body;
    console.log(body);
    //create post in DB then redirect user to Post page
    db.petfinder_data
      .create({
        animalSpecies: body.animalSpecies,
        animalGenderMale: body.animalGenderMale,
        animalFeatures: body.animalFeatures,
        animalPic: body.animalPic,
        foundStreet1: body.foundStreet1,
        foundStreet2: body.foundStreet2,
        personName: body.personName,
        personEmail: body.personEmail
      })
      .then(function(data) {
        // res.json(dbPetFinder);
        console.log("data", data);
        res.redirect("/post/" + data.dataValues.id);
      });
  });
  app.delete("/post/:id", function(req, res) {
    console.log("DELETING FORM " + req.params.id);
    db.petfinder_data
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(data) {
        return res.json(data);
        // res.redirect("/");
      });
  });
};
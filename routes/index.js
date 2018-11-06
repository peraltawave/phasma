// *********************************************************************************
// index.js - The file routes/index.js contains the logic for a request against the main homepage. 
// It loads the models module and uses it to load all the Animal Posts from the database.
//
// source: 
// https://sequelize.readthedocs.io/en/1.7.0/articles/express/
//
// *********************************************************************************


var models  = require('../models');
var express = require('express');
var app  = express.Router(); // this is the app name

app.get('/', function(req, res) {
  models.Animal.findAll({
    include: [ models.Task ]
  }).then(function(Animal) {
    res.render('index', {
      title: 'This is the title param - index js line 20',
      animals: animals
    });
  });
});

module.exports = app;


// module.exports = function(app) {
//     // Load index page
//     app.get("/", function(req, res) {
//       db.Example.findAll({}).then(function(dbExamples) {
//         res.render("index", {
//           msg: "Welcome!",
//           examples: dbExamples
//         });
//       });
//     });
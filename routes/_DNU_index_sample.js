// *********************************************************************************
// index.js - The file routes/index.js contains the logic for a request against the main homepage. 
// It loads the models module and uses it to load all the users and tasks from the database.
//
// source: 
// https://sequelize.readthedocs.io/en/1.7.0/articles/express/
//
// *********************************************************************************


var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;

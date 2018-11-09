var db = require("../models");

// REAL CODE

module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  //Route for Home Page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // index route loads iFoundaPet.html
  app.get("/iFoundAPet", function(req, res) {
    res.render("iFoundAPet-form");
  });

  // route for "post deleted" page
  app.get("/postDeleted", function(req, res) {
    res.render("postDeleted");
  });

  //Route for viewing a single post
  app.get("/post/:id", function(req, res) {
    var id = req.params.id;

    db.petfinder_data
      .findOne({
        where: {
          id: id
        }
      })
      .then(function(post) {
        console.log("post", post);
        res.render("post", {
          post: post
        });
      });
  });
  //Route for page to search pets
  app.get("/petSearch", function(req, res) {
    db.petfinder_data.findAll({}).then(function(response) {
      console.log(response);
      return res.render("petSearch", {
        allPosts: response
      });
    });
  });

  // blog route loads about.html
  app.get("/about", function(req, res) {
    res.render("about");
  });
};
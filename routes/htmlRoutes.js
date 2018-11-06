var db = require("../models");

module.exports = function(app) {
  // When user finds a pet. Goes to our site. Clicks I found a pet button. He then goes to this page
  app.get("/iFoundaPet", function(req, res) {
    db.petFinder_db.findAll({}).then(function(dbAll) {
      res.render("iFoundaPet", { // this is the page that it's gonna render
        msg: "I found a pet!",
        examples: dbAll
      });
    });
  });



/////////////^^^^ below this is an example from dave


// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.petFinder_db.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

/////////////^^^^ above this is an example from dave

module.exports = function(app) {
  // Load i Found a pet page
  app.get("/iFoundaPet", function(req, res) {
    db.petFinder_db.findAll({}).then(function(dbAll) {
      res.render("iFoundaPet", {
        msg: "I found a pet!",
        examples: dbExamples
      });
    });
  });

    // GET route for getting all of the posts
    app.get("/api/posts/", function(req, res) {
      db.petFinder_db.findAll({})
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });


      // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });






  // Load example page and pass in an example by id
  app.get("/iFoundaPet/:id", function(req, res) {
    db.devCoordinates.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
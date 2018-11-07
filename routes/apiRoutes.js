var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
//^^^^^^^^^^^^^^^^EXAMPLES^^^^^^^^^^^^^^^^^^^^^^^^^
// REAL CODE
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
};

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/", function(req, res) {
    db.Victim.findAll({}).then(function(dbVictim) {
      res.json(dbVictim);
    });
  });

//   // Create a new example
  app.post("/", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};

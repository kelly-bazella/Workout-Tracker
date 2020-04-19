const path = require("path");
const Workout = require("../models/workout.js");
module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  

};

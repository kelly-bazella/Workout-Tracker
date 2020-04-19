const path = require("path");
const mongojs = require("mongojs");
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
    Workout.insert(req.body, function(error,data){
      if(error){
        res.send(error)
      }else{
        res.send(data)
      }
    })
  });

  app.put("/api/workouts/:id", function(req, res){
      Workout.update(
        {
          _id: mongojs.ObjectId(req.params.id)
      }, 
      {
        $set: {
            exercise: req.body.exercise,
            name: req.body.name,
            distance: req.body.distance,
            duration: req.body.distance,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps
        }
      }, function(err, data){
          if (err){
              res.send(err)
          }else{
              res.send(data)
          }
      });
  });

app.get("/api/workouts/range", function(req, res){
    Workout.find({}).limit(7).then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json(err)
    });
});
};

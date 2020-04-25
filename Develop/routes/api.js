const path = require("path");
const mongojs = require("mongojs");
const Workout = require("../models/workout.js");
module.exports = (app) => {
  app.get("/api/workout", (req, res) => {
    Workout.find({})
      .then((data) => {
        console.log(data)
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    console.log(req)
    Workout.create(req.body)

    .then((data)=>{
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
  });

  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      
        req.params.id
      ,
      {
        $push: {
          exercise: req.body
        },
      },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(7)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

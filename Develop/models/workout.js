const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
      day: {
          type: Date,
          default:()=> new Date()
      },
    exercise: [
      {
        type: {
          type: String,
          trim: true,
          required: "What type of exercise?",
        },
        name: {
          type: String,
          trim: true,
          required: "What is the name of the exercise?",
        },
        distance: {
          type: Number,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

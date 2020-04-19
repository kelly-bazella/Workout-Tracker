const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercise:[
        {
            type: {
            type: String,
            trim: true,
            required: "What type of exercise?"
        },
        name: {
            type: String,
            trim: true,
            required: "What is the name of the exercise?"
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }
        ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
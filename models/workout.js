const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workouts = new Schema({
  day: {
    type: Number,
    default: new Date(),
  },
  exercises: Array,
  versionKey: false,
});

const workout = mongoose.model("workout", workouts);

module.exports = workout;

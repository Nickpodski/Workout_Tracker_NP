const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Please enter what type of exercise you did!"
    },
    name: {
      type: String,
      trim: true,
      required: "Please enter the name of your exercise!"
    },
    duration: {
      type: Number,
      required: "Please enter the duration of your exercise!"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports =Workout;
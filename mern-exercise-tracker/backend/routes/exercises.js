const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise.model');
const User = require('../models/user.model');

router.get('/', (req, res) => {
  User.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => {
      console.log(err);
      res.status(400).json('Error: ' + err);
    });
});

router.post('/add', (req, res) => {
  console.log(req.body);
  const { userId } = req.body;
  const { description } = req.body;
  const { duration } = req.body;
  const { date } = req.body;

  const newExercise = {
    description,
    duration,
    date,
  };

  User.updateOne({ _id: userId }, { $push: { exercises: newExercise } })
    .then(() => res.json('exercise added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/update/:id', (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      (exercise.username = req.body.username),
        (exercise.description = req.body.description),
        (exercise.duration = Number(req.body.duration)),
        (exercise.date = Date.parse(req.body.date));

      exercise
        .save()
        .then(() => res.json('Exercise updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

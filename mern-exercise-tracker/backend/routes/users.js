const express = require('express');
const router = express.Router();
let User = require('../models/user.model');

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const { name } = req.body;
  const { age } = req.body;
  const { weight } = req.body;

  const newUser = new User({ name, age, weight });
  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

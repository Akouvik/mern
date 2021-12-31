const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    age: { type: String, required: true, trim: true, minlength: 2 },
    weight: { type: String, required: true, trim: true, minlength: 2 },
    exercises: { type: Array, trim: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

const express = require('express');
const cors = require('cors');
require('dotenv').config();
//require mongoose
const mongoose = require('mongoose');
// allows you access to sensitive environment variables
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
//connect to our database
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch((err) => {
    console.log('DB Connection Failed', err);
  });

// serve this file on the /exercise route
const exercisesRouter = require('./routes/exercises');
//serve this file on the /user route
const userRouter = require('./routes/users');
app.use('/users', userRouter);
app.use('/exercises', exercisesRouter);

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});

// https://www.youtube.com/watch?v=7CqJlxBYj-M&ab_channel=freeCodeCamp.org
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import LandingPage from './components/landing-page';
import ExercisesList from './components/exercises-list';
import EditExercises from './components/edit-exercises';
import CreateExercises from './components/create-exercises';
import CreateUser from './components/create-user';
function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={LandingPage} />
        <Route path="/exercises" component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercises} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </div>
  );
}
export default App;

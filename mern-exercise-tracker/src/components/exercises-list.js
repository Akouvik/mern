import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
require('dotenv');
// const currentUrl = process.env.NODE_ENV
//   ? process.env.LOCALSERVER
//   : process.env.DEVELOPMENTSERVER;
const Exercise = (props) => (
  <tr>
    <td>{props.exercise.name}</td>
    {props.exercise.exercises.map((exercise, index) => (
      <div key={exercise.duration * index}>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.duration}</td>
      </div>
    ))}
    {/* <td>{props.exercise.date.substring(0, 10)}</td> */}
    <td>
      <Link to={'/edit/' + props.exercise._id} className="font-weight-bold">
        edit
      </Link>
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/exercises/`)
      .then((response) => {
        this.setState({ exercises: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log('THE ERROR FROM LIST', error);
      });
  }

  deleteExercise(id) {
    axios.delete(`http://localhost:5000/exercises/` + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          // deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

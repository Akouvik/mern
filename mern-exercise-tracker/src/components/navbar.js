import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link to="/">
          <h3 id="logo">ExerciseTracker</h3>
        </Link>
        <div className="collpase navbar-collapse navitems">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/exercises" className="nav-link">
                <h5>Exercises</h5>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                <h5>Create Exercise Log</h5>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                <h5>Create User</h5>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config();

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      age: '',
      weight: '',
    };
  }
  currentUrl = process.env.NODE_ENV
    ? process.env.LOCALSERVER
    : process.env.DEVELOPMENTSERVER;

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
    });
  }

  onSubmit(e) {
    console.log('i was called');
    e.preventDefault();

    const user = {
      username: this.state.username,
      age: this.state.age,
      weight: this.state.weight,
    };

    console.log(user);

    axios
      .post('http://localhost:5000/user/add', user)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      username: '',
      age: '',
      weight: '',
    });
    alert(this.state.username + ' was added!');
    window.location = '/exercises/add';
  }

  render() {
    return (
      <div className="container">
        <h3>Create New User/Signup</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="mike"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              required
              placeholder="23"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>

          <div className="form-group">
            <label>Weight: </label>
            <input
              type="text"
              required
              placeholder="120 pounds"
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
            />
          </div>
          <input
            value="Create User"
            type="submit"
            className="btn btn-primary center px-5"
          />
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config();

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
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
    e.preventDefault();

    const user = {
      username: this.state.username,
      age: this.state.age,
      weight: this.state.weight,
    };

    console.log(user);

    axios
      .post(`${this.currentUrl}/user/create`, user)
      .then((res) => console.log(res.data));

    this.setState({
      username: '',
      age: '',
      weight: '',
    });
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
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label>Weight: </label>
            <input
              type="text"
              required
              placeholder="120 pounds"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
        </form>
        <input
          value="Create"
          type="button"
          className="btn btn-primary center px-5"
        />
      </div>
    );
  }
}

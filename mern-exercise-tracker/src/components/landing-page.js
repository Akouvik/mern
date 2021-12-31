import React, { Component } from 'react';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page">
        <h1>Welcome to Exercise Tracker</h1>

        <div id="landing_message">
          <h5>
            Please browse our site to for information on how to create a better
            fitter you
          </h5>
        </div>
      </div>
    );
  }
}

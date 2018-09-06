import React, { Component } from "react";
import "./Second.css";

class Second extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      imageUrl: ""
    };
  }

  handleLocation = e => {
    this.setState({ location: e.target.value });
  };

  handleURL = e => {
    this.setState({ imageUrl: e.target.value });
  };

  render() {
    console.log("second ", this.state);
    return (
      <div className="second_wrapper">
        <h1>On-Change</h1>
        <span>Location:</span>
        <input
          onChange={e => {
            this.handleLocation(e);
          }}
        />
        <span>Url:</span>
        <input
          onChange={e => {
            this.handleURL(e);
          }}
        />

        <div>{this.state.location}</div>
        <img src={this.state.imageUrl} />
      </div>
    );
  }
}

export default Second;

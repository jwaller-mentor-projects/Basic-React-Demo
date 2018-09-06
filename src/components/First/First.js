import React, { Component } from "react";
import "./First.css";

class First extends Component {
  handleClick = () => {
    alert("Hello!!!");
  };

  render() {
    return (
      <div className="first_wrapper">
        <h1>On-Click</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default First;

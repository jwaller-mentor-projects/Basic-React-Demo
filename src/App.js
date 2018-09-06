import React, { Component } from "react";
import logo from "./logo.svg";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Billy",
      age: 55
    };
  }

  render() {
    // console.log(this.state);
    return (
      <div className="total_wrapper">
        <h1>Rendering Text</h1>
        <p>
          Hi, my name is {this.state.name} and I am {this.state.age} yrs old.
        </p>
        <First />
        <Second />
      </div>
    );
  }
}

export default App;

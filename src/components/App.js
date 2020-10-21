import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    let handleClick = () => {
      this.setState({
        text: `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
      });
    };
    return (
      <div id="main">
        <button onClick={handleClick} id="click">
          Hello
        </button>
        <p id="para">{this.state.text}</p>
      </div>
    );
  }
}

export default App;

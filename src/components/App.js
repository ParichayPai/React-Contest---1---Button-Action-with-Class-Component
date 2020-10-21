import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { para: "" };
  }
  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() =>
            this.setState({
              para:
                "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            })
          }
        >
          Button
        </button>
        {this.state.para ? <p id="para">{this.state.para}</p> : ""}
      </div>
    );
  }
}

export default App;

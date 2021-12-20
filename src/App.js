import React, { Component } from "react";
import "./App.css";
import DogList from "./DogList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dogs: data.message });
      });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>12 Random Dogs</h1>
        <h2 style={{ textAlign: "center" }}>
          Refresh the page for your enjoyment!
        </h2>
        <DogList dogs={this.state.dogs} />
      </div>
    );
  }
}

export default App;

// Component class and Dog variables from Jason Rivera on YT

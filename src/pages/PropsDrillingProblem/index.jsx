import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import diagram from "./components/React-Context-API-1.avif";

export default class PropsDrillingProblem extends Component {
  state = {
    title: "Home",
    username: "John Doe",
    activeProfileId: "A1B2C3",
    showImage: false,
  };

  toggleImage = () => {
    this.setState({ showImage: !this.state.showImage });
  };

  render() {
    const { activeProfileId, title, username } = this.state;
    return (
      <div className="app">
        <h1>Welcome, {this.state.username}</h1>
        <button onClick={this.toggleImage}> Show diagram</button>
        <img
          src={diagram}
          style={{
            display: !this.state.showImage ? "none" : "block",
            maxWidth: "100%",
          }}
          alt="diagram"
        />
        <Dashboard {...{ activeProfileId, title, username }} />
      </div>
    );
  }
}

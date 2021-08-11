import React, { Component } from "react";

export default class Ref extends Component {
  // componentWillMount() {}

  render() {
    return <div ref={(el) => (this.el = el)}>Ref</div>;
  }
}

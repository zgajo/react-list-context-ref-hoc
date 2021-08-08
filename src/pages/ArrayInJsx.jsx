import React, { Component } from "react";
import { students } from "../constants";

export default class ArrayInJsx extends Component {
  render() {
    return (
      <>
        <h3>{`Component name: ${this.constructor.name}.jsx`}</h3>
        <div>{students}</div>
      </>
    );
  }
}

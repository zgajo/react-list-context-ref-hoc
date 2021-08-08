import React, { Component } from "react";
import { students } from "../constants";

export default class ArrayMapInJsx extends Component {
  render() {
    const listStudents = students.map((el) => <li>{el}</li>);
    return (
      <>
        <h3>{`Component name: ${this.constructor.name}.jsx`}</h3>
        <ul>{listStudents}</ul>
      </>
    );
  }
}

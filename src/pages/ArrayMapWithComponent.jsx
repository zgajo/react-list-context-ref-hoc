import React, { Component } from "react";
import { students } from "../constants";

class StudentLi extends Component {
  render() {
    return <li>{this.props.student}</li>;
  }
}

export default class ArrayMapWithComponentInJsx extends Component {
  render() {
    const listStudents = students.map((el) => <StudentLi student={el} />);
    return (
      <>
        <h3>{`Component name: ${this.constructor.name}.jsx`}</h3>
        <ul>{listStudents}</ul>
      </>
    );
  }
}

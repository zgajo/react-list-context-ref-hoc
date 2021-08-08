import React, { Component } from "react";
import { students } from "../constants";

class StudentLi extends Component {
  render() {
    return <li>{this.props.student}</li>;
  }
}

export default class ArrayMapWithComponentInKeyJsx extends Component {
  render() {
    const listStudents = students.map((el, index) => (
      <StudentLi key={index} student={el} />
    ));
    return (
      <>
        <h3>{`Component name: ${this.constructor.name}.jsx`}</h3>
        <ul>{listStudents}</ul>
      </>
    );
  }
}

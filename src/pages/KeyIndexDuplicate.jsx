import React, { Component } from "react";

export default class KeyIndexDuplicate extends Component {
  state = {
    lecturers: [
      { id: 1, name: "Darko" },
      { id: 2, name: "Inan" },
      { id: 3, name: "Darko" },
    ],
  };

  addLecturer = () => {
    this.setState({
      lecturers: [{ id: 4, name: "Ilija" }, ...this.state.lecturers],
    });
  };

  render() {
    return (
      <div>
        <h3>{`Component name: ${this.constructor.name}.jsx`}</h3>

        {this.state.lecturers.map((el) => (
          <div key={el.name}>{el.name}</div>
        ))}
      </div>
    );
  }
}

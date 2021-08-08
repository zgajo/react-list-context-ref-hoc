import React, { Component } from "react";

export default class KeyIndexTree extends Component {
  state = {
    lecturers: [
      { id: 1, name: "Darko" },
      { id: 2, name: "Inan" },
    ],
  };

  render() {
    return (
      <div>
        <h3>{`Component name: ${this.constructor.name}.jsx`}</h3>

        {this.state.lecturers.map((outerEl) => (
          <div key={outerEl.name}>
            {this.state.lecturers.map((innerEl) => (
              <div key={innerEl.name}>
                {outerEl.name}: {innerEl.name}
              </div>
            ))}
          </div>
        ))}

        <pre>
          {JSON.stringify(
            {
              root: {
                type: "div",
                children: [
                  {
                    type: "h3",
                    children: [`Component name: ${this.constructor.name}.jsx`],
                  },
                  {
                    type: "div",
                    key: "Darko",
                    children: [
                      { type: "div", key: "Darko", children: ["Darko: Darko"] },
                      { type: "div", key: "Inan", children: ["Darko: Inan"] },
                    ],
                  },
                  {
                    type: "div",
                    key: "Inan",
                    children: [
                      { type: "div", key: "Darko", children: ["Inan: Darko"] },
                      { type: "div", key: "Inan", children: ["Inan: Inan"] },
                    ],
                  },
                ],
              },
            },
            null,
            2
          )}
        </pre>
      </div>
    );
  }
}

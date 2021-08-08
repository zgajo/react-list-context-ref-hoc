import React, { Component } from "react";

function MyFunctionComponent() {
  return <input />;
}

export default class RefsFunctionComponents extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // This will *not* work!
    return <MyFunctionComponent ref={this.textInput} />;
  }
}

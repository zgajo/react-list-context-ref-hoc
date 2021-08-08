import React, { Component } from "react";

const MyFunctionComponent = React.forwardRef((props, ref) => (
  <input ref={ref} />
));

export default class RefForwardRefs extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // This will *not* work!
    return (
      <div>
        <MyFunctionComponent ref={this.textInput} />;
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

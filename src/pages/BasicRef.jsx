import { Component, createRef } from "react";

export class BasicRef extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }
  componentDidMount() {
    console.log(this.myRef);
  }

  render() {
    return <div ref={this.myRef}>Hello World</div>;
  }
}

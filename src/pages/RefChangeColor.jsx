import { Component, createRef } from "react";

export class RefChangeColor extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }
  componentDidMount() {
    console.log(this.myRef);
  }

  changeColor = () => {
    this.myRef.current.style.color = "red";
    console.log("ref after color change", this.myRef);
  };

  render() {
    console.log("render");
    return (
      <>
        <div ref={this.myRef}>Hello World</div>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

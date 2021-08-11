import { Component, StrictMode } from "react";
import "./App.css";
import Lifecycle from "./components/Lifecycle";
import Ref from "./components/Ref";

export default class App extends Component {
  render() {
    return (
      <div>
        <StrictMode>
          <Lifecycle />
          <Ref />
        </StrictMode>
      </div>
    );
  }
}

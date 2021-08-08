import React, { Component } from "react";

// noprotect
class Item extends Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.name}</label>
        <div>
          <input type="text" />
        </div>
      </div>
    );
  }
}

class KeyIndexProblem extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "Foo1444610101010", id: 1444610101010 },
        { name: "Bar1444600000000", id: 1444600000000 },
      ],
    };
  }

  userInput() {
    const firstItems = Array.from(
      document.querySelectorAll(".form-group:first-child input")
    );
    firstItems.forEach(
      (item) => (item.value = "It is " + new Date().toTimeString())
    );
  }

  addItem() {
    const id = +new Date();
    this.setState({
      list: [{ name: "Baz" + id, id }, ...this.state.list],
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>{`Component name: ${this.constructor.name}.jsx`}</h3>

        <button onClick={this.addItem.bind(this)}>
          <b>Add item</b> to the beginning of the list
        </button>
        <h3>
          Dangerous <code>key=index</code>
        </h3>
        <form>
          {this.state.list.map((todo, index) => (
            <Item {...todo} key={index} />
          ))}
        </form>
        <h3>
          Better <code>key=id</code>
        </h3>
        <form>
          {this.state.list.map((todo) => (
            <Item {...todo} key={todo.id} />
          ))}
        </form>
      </div>
    );
  }
}

export default KeyIndexProblem;

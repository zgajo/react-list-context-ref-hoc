import { Component, createContext } from "react";

export const UserContext = createContext(undefined);
export const UserDispatchContext = createContext(undefined);

export class UserProvider extends Component {
  state = {
    username: "John Doe",
  };

  setUserDetails = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.username}>
        <UserDispatchContext.Provider value={this.setUserDetails}>
          {this.props.children}
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    );
  }
}

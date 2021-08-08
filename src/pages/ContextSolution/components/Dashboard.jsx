import React, { Component, useContext } from "react";
import { UserContext, UserDispatchContext, UserProvider } from "./UserProvider";

function SideNav({ activeProfileId }) {
  return (
    <div className="sideNav">
      <h1 className="title">ID: {activeProfileId}</h1>
      <p>Home</p>
      <p>Profile</p>
    </div>
  );
}

function Main({ title }) {
  return (
    <div className="dashboardContent">
      <UserProvider>
        <TopNav {...{ title }} />
        <Page />
      </UserProvider>
    </div>
  );
}

function TopNav({ title }) {
  return (
    <UserContext.Consumer>
      {(username) => (
        <nav className="topNav">
          <h1> {title} </h1>
          <div> of {username}</div>
        </nav>
      )}
    </UserContext.Consumer>
  );
}

function Page() {
  return (
    <div className="pages">
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <UserContext.Consumer>
      {(username) => (
        <UserDispatchContext.Consumer>
          {(setUserDetails) => (
            <div className="profile">
              <h1>User Profile</h1>
              <form>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={setUserDetails}
                />
                <input type="submit" value="Update username" />
              </form>
            </div>
          )}
        </UserDispatchContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

// Hooks
// function Profile() {
//   const username = useContext(UserContext);
//   const setUserDetails = useContext(UserDispatchContext);
//   return (
//     <div className="profile">
//       <h1>User Profile</h1>
//       <form>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           value={username}
//           onChange={setUserDetails}
//         />
//         <input type="submit" value="Update username" />
//       </form>
//     </div>
//   );
// }

export default class Dashboard extends Component {
  render() {
    const { activeProfileId, title } = this.props;
    return (
      <div className="dashboard">
        <SideNav {...{ activeProfileId }} />
        <Main {...{ title }} />
      </div>
    );
  }
}

import React, { Component } from "react";

function SideNav({ activeProfileId }) {
  return (
    <div className="sideNav">
      <h1 className="title">ID: {activeProfileId}</h1>
      <p>Home</p>
      <p>Profile</p>
    </div>
  );
}

function Main({ title, username }) {
  return (
    <div className="dashboardContent">
      <TopNav {...{ title }} />
      <Page {...{ username }} />
    </div>
  );
}

function TopNav({ title }) {
  return (
    <nav className="topNav">
      <h1> {title} </h1>
    </nav>
  );
}

function Page({ username }) {
  return (
    <div className="pages">
      <Profile {...{ username }} />
    </div>
  );
}

function Profile({ username }) {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={() => {}}
        />
        <input type="submit" value="Update username" />
      </form>
    </div>
  );
}

export default class Dashboard extends Component {
  render() {
    const { activeProfileId, title, username } = this.props;
    return (
      <div className="dashboard">
        <SideNav {...{ activeProfileId }} />
        <Main {...{ title, username }} />
      </div>
    );
  }
}

import React from "react";

const Root = { backgroundColor: "#44014C", width: "300px", minHeight: "200px" };
const Header = { padding: "10px 20px", textAlign: "center", color: "white" };
const Body = { color: "white" };

export default function InlineStyle() {
  return (
    <div style={Root}>
      <h2 style={Header}>Header</h2>
      <div>
        <p style={Body}>Body</p>
      </div>
    </div>
  );
}

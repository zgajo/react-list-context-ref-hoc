import React from "react";

export default function InlineStyle() {
  return (
    <div
      style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px" }}
    >
      <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white" }}>
        Header
      </h2>
      <div>
        <p style={{ color: "white" }}>Body</p>
      </div>
    </div>
  );
}

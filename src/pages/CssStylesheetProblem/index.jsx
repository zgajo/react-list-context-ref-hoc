import React from "react";
import "./box.css";
import Footer from "./components/Footer";

export default function CssStylesheetProblem() {
  return (
    <div className="box">
      <p className="box_content"> Styling React Components </p>
      <Footer />
    </div>
  );
}

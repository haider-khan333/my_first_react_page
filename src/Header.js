import React from "react";
import ReactImage from "../src/images/react_image.png";

export default function Header() {
  return (
    <header>
      <nav className="container header-nav-items">
        <img src={ReactImage} className="react-image" />
        <label className="react-facts"> ReactFacts</label>
        <label className="react-course">React Course - Project 1</label>
      </nav>
    </header>
  );
}

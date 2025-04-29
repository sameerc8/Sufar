import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>TravelMate</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tours">Our Tours</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

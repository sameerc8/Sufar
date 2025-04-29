import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div>
      <div className="background-video">
        <video autoPlay loop muted>
          <source src="./backgroundvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section id="home" className="hero">
        <h2>Explore the World with Us</h2>
        <p>
          Join us for unforgettable travel experiences to exotic destinations!
        </p>
        <a href="#tours" className="btn">
          View Tours
        </a>
      </section>
    </div>
  );
}

export default Hero;

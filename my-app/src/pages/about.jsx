import React from 'react';
import './About.css';  // Importing the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="heading">About Us</h1>
      <p className="paragraph">
        Welcome to our travel agency! We specialize in offering unforgettable experiences and curated travel packages for explorers, adventurers, and vacationers around the world.
      </p>
      <p className="paragraph">
        Whether you're looking for a relaxing beach holiday, an exciting city tour, or an adventurous trek through nature, we have the perfect package for you. Our expert team is dedicated to providing you with the best possible travel experience, every step of the way.
      </p>
      <h2 className="subheading">Our Mission</h2>
      <p className="paragraph">
        Our mission is to make travel accessible and enjoyable for everyone. We believe that travel is not just about destinations; it’s about creating memories that last a lifetime. We are committed to delivering excellent service, affordable packages, and seamless experiences.
      </p>
      <h2 className="subheading">Why Choose Us?</h2>
      <ul className="list">
        <li>Personalized Travel Packages</li>
        <li>24/7 Customer Support</li>
        <li>Affordable and Flexible Options</li>
        <li>Experienced Travel Guides</li>
        <li>Safety and Comfort</li>
      </ul>
      <p className="paragraph">
        Ready to book your next adventure? Contact us today and let us help you plan the journey of a lifetime!
      </p>
    </div>
  );
};

export default About;

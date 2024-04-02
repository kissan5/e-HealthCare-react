import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          At MediConnect, we take pride in making your health our utmost
          responsibility. Our dedicated team is committed to providing
          personalized care and support tailored to your individual needs. With
          advanced technology and a compassionate approach, we strive to empower
          you on your journey to better health and well-being. Trust us to
          prioritize your health and ensure you receive the highest quality of
          care every step of the way.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;

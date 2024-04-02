import React from "react";
import image from "../images/aboutimg.jpeg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            {/* Add a div to start the paragraph from image line */}
            <div>
              <p>
                MediConnect, a preeminent healthcare platform dedicated to
                empowering individuals globally, stands firm in its commitment
                to harnessing innovative technology and delivering personalized
                care to offer accessible and comprehensive healthcare solutions.
                At the heart of our endeavor lies a profound mission: to
                spearhead a paradigm shift in healthcare, thereby guaranteeing
                universal access to quality services and unwavering support for
                all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

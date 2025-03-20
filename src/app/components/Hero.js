import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Madrid</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally sourced menu with daily specials. It’s
          italian and meditaranean style makes it lovely place which is
          guaranteed to make you feel like you are on a summer vacation in
          beautiful Italy.
        </p>
        <a href="#highlights" className="cta-button">
          Reserve a table
        </a>
      </div>
      <div className="hero-image-wrapper">
        <Image
          src="/hero.jpg"
          alt="Hero image"
          width={250}
          height={200}
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;

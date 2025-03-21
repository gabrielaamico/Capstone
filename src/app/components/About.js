import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Madrid</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally sourced menu with daily specials. Its
          Italian and Mediterranean style makes it a lovely place that is
          guaranteed to make you feel like you are on a summer vacation in
          beautiful Italy.
        </p>
      </div>

      <div className="about-images">
        <div className="image-container">
          <Image
            src="/ma1.jpg"
            alt="Restaurant Interior"
            width={450}
            height={500}
            className="image image-1"
          />
          <Image
            src="/ma2.jpg"
            alt="Delicious Food"
            width={450}
            height={500}
            className="image image-2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

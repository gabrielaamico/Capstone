import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="grid-layout">
      <h1>Little Lemon</h1>
      <h2>Madrid</h2>
      <p>...</p>
      <a href="#highlights" className="cta-button">
        Reserve a table
      </a>
      <Image src="/salad.jpg" alt="Greek Salad" width={250} height={200} />
    </section>
  );
};

export default Hero;

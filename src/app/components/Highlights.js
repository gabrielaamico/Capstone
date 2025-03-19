import React from "react";
import Image from "next/image";

const Highlights = () => {
  return (
    <section id="highlights" className="grid-layout">
      <article>
        <Image src="/salad.jpg" alt="Greek Salad" width={250} height={200} />
        <h3>Greek Salad 12.99$</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          metus porttitor urna tincidunt blandit vel.
        </p>
        <h4>Order a delivery</h4>
      </article>
      <article>
        <Image src="/bruchetta.svg" alt="Bruchetta" width={250} height={200} />
        <h3>Bruchetta</h3>
        <p>Another tasty option.</p>
      </article>
      <article>
        <Image
          src="/dessert.jpg"
          alt="Lemon Dessert"
          width={200}
          height={250}
        />
        <h3>Lemon Dessert</h3>
        <p>Yummy food here.</p>
      </article>
    </section>
  );
};

export default Highlights;

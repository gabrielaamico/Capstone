"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dishes = [
  {
    id: 1,
    image: "/salad.jpg",
    title: "Greek Salad",
    price: "12.99$",
    description: "Fresh Greek salad with olives and feta.",
  },
  {
    id: 2,
    image: "/bruchetta.svg",
    title: "Bruchetta",
    price: "9.99$",
    description: "Bread with fresh tomatoes and basil.",
  },
  {
    id: 3,
    image: "/dessert.jpg",
    title: "Lemon Dessert",
    price: "7.99$",
    description: "Delicious lemon-flavored dessert.",
  },
  {
    id: 4,
    image: "/dessert.jpg",
    title: "Lemon Dessert",
    price: "7.99$",
    description: "Delicious lemon-flavored dessert.",
  },
  {
    id: 5,
    image: "/bruchetta.svg",
    title: "Bruchetta",
    price: "9.99$",
    description: "Bread with fresh tomatoes and basil.",
  },
];

const Highlights = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="highlights" className="highlights-section">
      <div className="highlights-header">
        <h2>Specials</h2>
        <button className="menu-button">Online Menu</button>
      </div>

      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <ChevronLeft size={32} />
        </button>

        <div className="dishes-container" ref={scrollRef}>
          {dishes.map((dish) => (
            <article key={dish.id} className="dish-card">
              <Image
                src={dish.image}
                alt={dish.title}
                width={250}
                height={100}
                className="dish-image"
              />
              <div className="dish-info">
                <h3>
                  {dish.title} <span className="price">{dish.price}</span>
                </h3>
                <p>{dish.description}</p>
                <a href="#" className="order-link">
                  Order a delivery
                </a>
              </div>
            </article>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default Highlights;

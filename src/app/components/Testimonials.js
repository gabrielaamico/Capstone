"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "Amazing food and great atmosphere!",
    image: "/hero.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Smith",
    review: "The best restaurant experience I've had!",
    image: "/hero.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Sarah Brown",
    review: "Delicious meals and friendly staff!",
    image: "/hero.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    review: "Highly recommend the pasta dishes!",
    image: "/hero.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    review: "Great service and fresh ingredients!",
    image: "/hero.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollRef.current = document.querySelector(".reviews-wrapper");
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>

      <div className="testimonials-container">
        <button onClick={scrollLeft} className="scroll-buttons lefts">
          &#8249;
        </button>

        <div className="reviews-wrapper" ref={scrollRef}>
          {testimonials.map(({ id, name, review, image, rating }) => (
            <article key={id} className="testimonial">
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < rating ? "star filled" : "star"}
                  />
                ))}
              </div>

              <div className="customer-info">
                <Image
                  src={image}
                  alt={name}
                  width={50}
                  height={50}
                  className="customer-image"
                />
                <h4 className="customer-name">{name}</h4>
              </div>

              <p className="review-text">"{review}"</p>
            </article>
          ))}
        </div>

        <button onClick={scrollRight} className="scroll-buttons rights">
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

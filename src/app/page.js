import React from "react";
import Head from "next/head";
import Header from "./components/Header.js";

export default function Home() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Little Lemon Restaurant</title>
        <meta
          name="description"
          content="Enjoy delicious italian mediteranean meals at Little Lemon Restaurant."
        />
        <meta name="og:title" content="Little Lemon Restauranr" />
        <meta name="og:description" content="Italian Mediteranean Restaurant" />
        <meta name="og:image" content="/logo2.png" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <link />
      </Head>

      {/* Header with Navigation */}
      <Header />
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order">Order online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section id="hero">
          <h1>Little Lemon</h1>
          <h2>Madrid</h2>
          <p>...</p>
          <button>Reserve a Table</button>
        </section>
      </main>

      {/* Highlights */}
      <section id="highlights">
        <h2>Specials</h2>
        <button>Online Menu</button>
        <article>
          <h3>Greek salad 12.99$</h3>
          <p>description</p>
        </article>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>"Great food"</p>
          <cite>Happy customer</cite>
        </blockquote>
      </section>

      {/* About */}
      <section id="about">
        <h1>Little Lemon</h1>
        <h2>Madrid</h2>
        <p>description</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </footer>
    </>
  );
}

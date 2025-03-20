import React from "react";
import Head from "next/head";
import Highlights from "./components/Highlights.js";
import Hero from "./components/Hero.js";
import Testimonials from "./components/Testimonials.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import "./globals.css";

export default function Home() {
  return (
    <>
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
      </Head>

      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

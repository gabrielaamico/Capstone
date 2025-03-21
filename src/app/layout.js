import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

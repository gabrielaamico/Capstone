import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <Image
          src="/logo1.png"
          alt="Little Lemon Logo"
          width={80}
          height={30}
        />
      </div>

      {/* Footer Sections */}
      <div className="footer-sections">
        {/* Navigation */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/reservation">Reservation</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="#">123 Madrid</a>
            </li>
            <li>
              <a href="tel:+123456789">+123 456 789</a>
            </li>
            <li>
              <a href="mailto:contact@littlelemon.com">contact@lemon.com</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-column">
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
            <li>
              <a href="#">Snapchat</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer-copyright">
        &copy; 2025 Little Lemon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

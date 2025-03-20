import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Image
          src="/logo.png"
          alt="Little Lemon Logo"
          width={180}
          height={90}
        />
      </div>
      <ul>
        <li>
          <Link href="/app">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/reservations">Reservations</Link>
        </li>
        <li>
          <Link href="/order">Order online</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

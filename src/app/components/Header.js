import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Image
          src="/logo.png"
          alt="Little Lemon Logo"
          width={100}
          height={60}
        />
      </div>
      <Nav />
    </header>
  );
};

export default Header;

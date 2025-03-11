import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <Image
          src="/logo1.png"
          alt="Little Lemon Logo"
          width={100}
          height={50}
        />
      </div>
      <p>&copy; 2025 Restaurant Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

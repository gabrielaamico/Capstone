import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      {/* Background Image */}
      <Image
        src="/header.jpg" // Replace with your image path
        alt="Reservation Background"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
        quality={100}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Make a Reservation</h1>
      </div>

      {/* Back Arrow */}
      <Link href="/" className="absolute top-5 left-5 text-white p-2">
        <ArrowLeft size={32} />
      </Link>
    </header>
  );
};

export default Header;

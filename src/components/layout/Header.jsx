import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300 px-6 py-3 flex items-center justify-between">
      {/* Left Side Logo/Image */}
      <div className="flex items-center">
        <img
          src="./logoheader.png" // replace with your image path
          alt="Logo"
          className="h-12 w-12 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-8">
        <a href="#" className="text-black hover:text-orange-500 transition">
          Home
        </a>
        <a href="#" className="text-orange-500 font-medium">
          Kundli Generation
        </a>
        <a href="#" className="text-black hover:text-orange-500 transition">
          AI Based Q&A
        </a>
        <a href="#" className="text-black hover:text-orange-500 transition">
          Remedies
        </a>
      </nav>
    </header>
  );
}

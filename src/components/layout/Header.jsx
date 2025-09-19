import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b shadow-md">
      {/* Logo */}
      <img src="/land6.jpeg" alt="logo" className="w-16 h-14" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-amber-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/kundli" className="hover:text-amber-600">
            Kundli Generation
          </Link>
        </li>
        <li>
          <Link to="/qna" className="hover:text-amber-600">
            AI Based Q&amp;A
          </Link>
        </li>
        <li>
          <Link to="/remedies" className="hover:text-amber-600">
            Remedies
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 border-t shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-amber-600" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/kundli" className="hover:text-amber-600" onClick={() => setMenuOpen(false)}>
                Kundli Generation
              </Link>
            </li>
            <li>
              <Link to="/qna" className="hover:text-amber-600" onClick={() => setMenuOpen(false)}>
                AI Based Q&amp;A
              </Link>
            </li>
            <li>
              <Link to="/remedies" className="hover:text-amber-600" onClick={() => setMenuOpen(false)}>
                Remedies
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

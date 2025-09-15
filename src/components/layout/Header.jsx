import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-100 border-b shadow-md">
      <img src="/land6.jpeg" alt="logo" className="w-16 h-14" />
      <ul className="flex gap-8 text-gray-700 font-medium">
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
    </nav>
  );
}

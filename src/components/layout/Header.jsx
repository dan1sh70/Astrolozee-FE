import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center sm:justify-between justify-center gap-8 px-8 py-4 bg-gray-100 border-b shadow-md">
      <img src="/land6.jpeg" alt="logo" className="sm:w-16 sm:h-14 w-10 h-10" />
      <ul className="flex sm:gap-8 gap-6 text-gray-700 font-medium text-xs sm:text-lg">
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

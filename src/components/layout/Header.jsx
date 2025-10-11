import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuthStore from "../../stores/useAuthStore";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  // const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav
      className="relative flex items-center justify-between
                 px-6 py-3  bg-gray-100 backdrop-blur-xl 
                 border border-black"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/land6.jpeg"
          alt="logo"
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl object-cover shadow-md"
        />
        
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[#14213d] font-medium text-sm lg:text-base">
        <li>
          <Link
            to="/"
            className="hover:text-[#fca311] transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/kundli"
            className="hover:text-[#fca311] transition-colors duration-200"
          >
            Kundli Generation
          </Link>
        </li>
        <li>
          <Link
            to="/qna"
            className="hover:text-[#fca311] transition-colors duration-200"
          >
            AI Based Q&amp;A
          </Link>
        </li>
        <li>
          <Link
            to="/remedies"
            className="hover:text-[#fca311] transition-colors duration-200"
          >
            Remedies
          </Link>
        </li>
        <li>
          {!isAuthenticated ? (
            <Link
            to="/login"
            className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
            hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
          >
            Login
          </Link>
          ) : (
             <button
            onClick={handleLogout}
            className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
            hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
          >
            Logout
          </button>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-[#14213d]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full mt-3 bg-white/30 backdrop-blur-lg 
                     border border-white/20 shadow-xl rounded-b-2xl md:hidden z-50"
        >
          <ul className="flex flex-col items-center gap-5 py-6 text-[#14213d] font-medium text-base">
            <li>
              <Link
                to="/"
                className="hover:text-[#fca311] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/kundli"
                className="hover:text-[#fca311] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Kundli Generation
              </Link>
            </li>
            <li>
              <Link
                to="/qna"
                className="hover:text-[#fca311] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                AI Based Q&amp;A
              </Link>
            </li>
            <li>
              <Link
                to="/remedies"
                className="hover:text-[#fca311] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Remedies
              </Link>
            </li>
            <li>
          {!isAuthenticated ? (
            <Link
            to="/login"
            className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
            hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
          >
            Login
          </Link>
          ) : (
             <button
            onClick={logout}
            className="px-5 py-2 bg-[#fca311] text-white rounded-xl shadow-md
            hover:bg-[#fca311]/90 hover:scale-105 transition-all duration-200"
          >
            Logout
          </button>
          )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

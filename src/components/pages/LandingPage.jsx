// App.jsx
import React from "react";

export default function App() {
  return (
    <div className="bg-[#fff6eb] min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#fff6eb] shadow-md">
        <div className="text-2xl font-bold text-amber-700">AstroLab</div>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-amber-600 cursor-pointer">Home</li>
          <li className="hover:text-amber-600 cursor-pointer">Kundli Generation</li>
          <li className="hover:text-amber-600 cursor-pointer">AI-Based Q&A</li>
          <li className="hover:text-amber-600 cursor-pointer">Remedies</li>
        </ul>
        <button className="px-5 py-2 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600">
          Explore
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <img
          src="./astro-wheel.png"
          alt="Astrology Wheel"
          className="mx-auto w-48 h-48 mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Where Mystics Meet Logic
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Unlock the secrets of the universe with astrology combined with
          cutting-edge AI. Personalized insights for every seeker.
        </p>
      </section>

      {/* Services */}
      <section className="px-8 py-12">
        <h2 className="text-center text-2xl font-bold text-amber-600 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img src="./hand.png" alt="Kundli" className="mx-auto w-20 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Kundli Generation
            </h3>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img src="./ai.png" alt="AI" className="mx-auto w-20 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              AI-Assisted Q&A
            </h3>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="./remedies.png"
              alt="Remedies"
              className="mx-auto w-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Remedies Suggestions
            </h3>
          </div>
        </div>
      </section>

      {/* Membership Call-to-Action */}
      <section className="text-center py-12 bg-[#fff0d9]">
        <h2 className="text-2xl font-bold text-gray-800">
          Let’s Become Members
        </h2>
        <button className="mt-6 px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow hover:bg-amber-600">
          Sign Up
        </button>
      </section>

      {/* Membership Plans */}
      <section className="px-8 py-12">
        <h2 className="text-center text-2xl font-bold text-amber-600 mb-10">
          Check Our Membership Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Celestial Seeker",
              price: "$9.99/month",
              desc: "Basic access to astrology insights and personalized reports.",
            },
            {
              title: "Celestial Explorer",
              price: "$19.99/month",
              desc: "Advanced tools with AI-assisted Q&A and remedies suggestions.",
            },
            {
              title: "Celestial Visionary",
              price: "$49.99/month",
              desc: "Full access including personal guidance and deep astrology reports.",
            },
          ].map((plan, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-2xl font-bold text-amber-600 mb-6">
                {plan.price}
              </p>
              <button className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Astrology Signs */}
      <section className="px-8 py-12 bg-[#fff0d9]">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Understanding Science of Astrology
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "Aries",
            "Taurus",
            "Gemini",
            "Cancer",
            "Leo",
            "Virgo",
          ].map((sign, i) => (
            <div key={i} className="text-center">
              <img
                src={`./${sign.toLowerCase()}.png`}
                alt={sign}
                className="mx-auto w-12 h-12 mb-2"
              />
              <h3 className="font-semibold text-gray-700">{sign}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#fff6eb] text-gray-600">
        © {new Date().getFullYear()} AstroLab. All rights reserved.
      </footer>
    </div>
  );
}

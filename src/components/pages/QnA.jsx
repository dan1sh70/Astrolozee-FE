import React from "react";
import Footer from "../layout/Footer";
import { Mic, Send, Settings } from "lucide-react";
import Header from "../layout/Header";

const QNA = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* ✅ Navbar */}
      <Header />

      {/* ✅ Middle Section */}
      <main
        style={{
          backgroundImage: 'url("/Wheel2-1.png")',
          backgroundSize: "cover", // make it adapt for small screens
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
        className="flex-grow flex flex-col items-center justify-center text-center px-4 py-10 bg-gray-50"
      >
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-amber-600 mb-2">
          Get your questions answered by AI
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Your first chat is on us!
        </p>

        {/* ✅ Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            "Career",
            "Health",
            "Relationship",
            "Marriage",
            "Business",
            "Professional",
          ].map((category) => (
            <button
              key={category}
              className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full bg-amber-50 hover:bg-amber-100 text-gray-700 shadow-sm transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Input Box */}
        <div className="w-full max-w-lg sm:max-w-xl relative bg-amber-100 rounded-lg px-4 py-4 shadow-md">
          <textarea
            rows="4"
            placeholder="Ask Anything..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none pr-12 text-sm sm:text-base"
          />
          {/* Icons positioned bottom-left */}
          <div className="absolute bottom-3 left-4 flex items-center gap-3 text-gray-600">
            <Mic className="w-5 h-5 cursor-pointer hover:text-amber-600" />
            <Send className="w-5 h-5 cursor-pointer hover:text-amber-600" />
            <Settings className="w-5 h-5 cursor-pointer hover:text-amber-600" />
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default QNA;

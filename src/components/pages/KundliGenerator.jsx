import React, { useState } from "react";
import { User, Calendar, Clock, MapPin } from "lucide-react";
import Header from "./../layout/Header";
import Footer from "./../layout/Footer";

export default function KundliForm() {
  const [gender, setGender] = useState("Male");

  return (
    <>
      {/* ✅ Header at top */}
      <Header />

      {/* Main Content */}
      <div
        className="min-h-screen flex items-center justify-center md:justify-end p-4 sm:p-6 bg-gray-50"
        style={{
          backgroundImage: "url('./Wheel2-1.png')",
          backgroundSize: "auto 100vh",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl">
          <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center md:text-left">
            Your Bio Data
          </h2>

          {/* Name */}
          <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
            <User className="text-yellow-600 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Enter name"
              className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
            />
          </div>

          {/* DOB and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
              <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
              <input
                type="date"
                className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
              <Clock className="text-yellow-600 w-5 h-5 mr-2" />
              <input
                type="time"
                className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
            <MapPin className="text-yellow-600 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
            />
          </div>

          {/* Gender */}
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <button
              onClick={() => setGender("Male")}
              className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
                gender === "Male"
                  ? "bg-yellow-600 text-white"
                  : "bg-[#f7d9a8] text-yellow-600 border-yellow-400"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender("Female")}
              className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
                gender === "Female"
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-yellow-600 border-yellow-400"
              }`}
            >
              Female
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="w-full sm:w-2/3 md:w-1/3 bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl font-medium transition text-sm sm:text-base">
              Generate Your Kundli
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

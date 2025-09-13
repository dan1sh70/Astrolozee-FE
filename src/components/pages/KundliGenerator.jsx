import React, { useState } from "react";
import { User, Calendar, Clock, MapPin } from "lucide-react";

export default function KundliForm() {
  const [gender, setGender] = useState("Male");

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-sm text-white mb-4">Your Bio Data</h2>

        {/* Name */}
        <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
          <User className="text-yellow-600 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600"
          />
        </div>

        {/* DOB and Time */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
            <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
            <input
              type="date"
              className="bg-transparent outline-none flex-1 text-black"
            />
          </div>
          <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
            <Clock className="text-yellow-600 w-5 h-5 mr-2" />
            <input
              type="time"
              className="bg-transparent outline-none flex-1 text-black"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center border border-orange-400 rounded-md px-3 py-2 mb-4">
          <MapPin className="text-orange-500 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent outline-none flex-1 text-black placeholder:text-orange-800"
          />
        </div>

        {/* Gender */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setGender("Male")}
            className={`px-4 py-2 rounded-md border ${
              gender === "Male"
                ? "bg-orange-500 text-white"
                : "bg-[#f7d9a8] text-orange-700 border-orange-400"
            }`}
          >
            Male
          </button>
          <button
            onClick={() => setGender("Female")}
            className={`px-4 py-2 rounded-md border ${
              gender === "Female"
                ? "bg-orange-500 text-white"
                : "bg-[#f7d9a8] text-orange-700 border-orange-400"
            }`}
          >
            Female
          </button>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-medium">
          Generate Your Kundli
        </button>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { User, Calendar, Clock, MapPin } from "lucide-react";
import Header from "./../layout/Header";
import Footer from "./../layout/Footer";
import KundliModal from "../KundliModal";
import useKundliStore from "../../stores/useKundliStore";

export default function KundliForm() {
  const [display, setDisplay] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    birth_date: "",
    birth_time: "",
    place: "",
    gender: "",
  });

  const {generateKundli,kundli,loading} = useKundliStore();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const { name, birth_date, birth_time, place, gender } = formData;

  if (!name || !birth_date || !birth_time || !place || !gender) {
    return alert("Please fill in all fields, including gender.");
  }

    try {
      await generateKundli(formData);
      setDisplay(true);
    } catch (error) {
      console.error("Error generating kundli:", error);
      alert("Failed to generate kundli. Please try again.");
      setDisplay(false);
    }
  }

  return (
    <>
      {/* ✅ Header at top */}
      <Header />

      {/* Main Content */}
      <div
        className="min-h-screen flex items-center justify-center md:justify-end p-4 sm:p-6 bg-gray-50 relative"
        style={{
          backgroundImage: "url('./Wheel2-1.png')",
          backgroundSize: "auto 100vh",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl z-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center md:text-left">
            Your Bio Data
          </h2>

          {/* Name */}
          <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
            <User className="text-yellow-600 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
            />
          </div>

          {/* DOB and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
              <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
              <input
                type="date"
                value={formData.birth_date}
                onChange={(e) =>
                  setFormData({ ...formData, birth_date: e.target.value })
                }
                className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
              <Clock className="text-yellow-600 w-5 h-5 mr-2" />
              <input
                type="time"
                value={formData.birth_time}
                onChange={(e) =>
                  setFormData({ ...formData, birth_time: e.target.value })
                }
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
              value={formData.place}
              onChange={(e) =>
                setFormData({ ...formData, place: e.target.value })
              }
              className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
            />
          </div>

          {/* ✅ Gender Selection */}
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <button
              onClick={() => setFormData({ ...formData, gender: "Male" })}
              className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
                formData.gender === "Male"
                  ? "bg-amber-500 text-white"
                  : "bg-white text-amber-500 border-yellow-400"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setFormData({ ...formData, gender: "Female" })}
              className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
                formData.gender === "Female"
                  ? "bg-amber-500 text-white"
                  : "bg-white text-amber-500 border-amber-500"
              }`}
            >
              Female
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
           <button
  onClick={handleSubmit}
  disabled={loading}
  className={`w-full sm:w-2/3 md:w-1/3 py-3 rounded-xl font-medium text-sm sm:text-base transition
    ${loading ? "bg-amber-400 cursor-not-allowed" : "bg-amber-500 hover:bg-yellow-700 text-white"}`}
>
  {loading ? "Generating..." : "Generate Your Kundli"}
</button>
          </div>
        </div>

        {/* Modal */}
        {display && kundli && (
  <KundliModal
    isOpen={display}
    onClose={() => setDisplay(false)}
    data={kundli}
    loading={loading}
  />
)}
      </div>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}

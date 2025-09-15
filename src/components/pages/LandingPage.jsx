// App.jsx
import React from "react";
import Footer from "../layout/Footer";
import MembershipPlans from "./Membership";
import Header from "../layout/Header";

export default function App() {
  return (
    <div className=" min-h-screen font-sans">
      {/* Navbar */}
      <Header/>

      {/* Hero Section */}
      <section className="bg-gray-50 flex items-center justify-center text-center gap-10 py-16 px-6">
        <img
          src="/land5.jpeg"
          alt="Astrology Wheel"
          className=" w-60 h-60"
        />
        <div>
          <h2 className="text-lg font-semibold text-amber-600 mb-2">
            What is your sign ? 
          </h2>
        <h1 className="text-5xl font-semibold text-gray-800 mb-4">
          Where Mystics Meet <br /> Logic
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover your cosmic path with celestial by your side.
        </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-8 py-12">
        <h2 className="text-center text-4xl font-semibold text-amber-600 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 border-black border rounded-xl shadow-md hover:shadow-lg transition">
            <img src="land1.jpeg" alt="Kundli" className="mx-auto w-60 h-60 mb-4" />
            <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
              Kundli Generation
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem animi velit. Illum sunt et iure, recusandae corrupti voluptas, in architecto autem consequatur aliquam non odio maiores itaque neque perferendis?</p>
          </div>
          <div className="p-6 bg-gray-50 border-black border rounded-xl shadow-md hover:shadow-lg transition">
            <img src="land2.jpeg" alt="AI" className="mx-auto w-60 h-60 mb-4" />
            <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
              AI-Assisted Q&A
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem animi velit. Illum sunt et iure, recusandae corrupti voluptas, in architecto autem consequatur aliquam non odio maiores itaque neque perferendis?</p>
          </div>
          <div className="p-6 bg-gray-50 border-black border rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="land3.jpeg"
              alt="Remedies"
              className="mx-auto w-60 h-60 mb-4"
            />
            <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
              Remedies Suggestions
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem animi velit. Illum sunt et iure, recusandae corrupti voluptas, in architecto autem consequatur aliquam non odio maiores itaque neque perferendis?</p>
          </div>
        </div>
      </section>

      {/* Membership Call-to-Action */}
      <section className="text-center py-12 bg-gray-50 border border-amber-400">
        <h2 className="text-4xl font-semibold text-gray-800">
          Let’s Become Members
        </h2>
        <button className="mt-6 px-16 py-5 bg-amber-500 text-white font-semibold rounded-xl shadow hover:bg-amber-600">
          Get Started
        </button>
      </section>

      {/* Membership Plans */}
<MembershipPlans/> 


      {/* Astrology Signs */}
<section className="px-8 py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="flex justify-between items-start mb-12">
      <h2 className="text-3xl font-semibold max-w-md">
        Understanding Science of Astrology
      </h2>
      <p className="text-sm text-gray-700 max-w-sm">
        Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
        tellus ut vehicula eu consectetur elit sit. Nulla erat nunc nisi dui sed
        cras semper vitae.
      </p>
    </div>

    {/* Zodiac Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Left Column */}
      <div className="space-y-10 relative mt-32">
        {/* Aries */}
        <div className="flex items-center space-x-6">
          <img src="land13.jpeg" alt="" className="h-40 w-40" /> {/* Image placeholder */}
          <div>
            <h3 className="text-lg font-bold">ARIES</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        {/* Taurus */}
        <div className="flex items-center space-x-6">
          <img src="land11.jpeg" alt="" className="h-40 w-40" />
          <div>
            <h3 className="text-lg font-bold">TAURUS</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        {/* Gemini */}
        <div className="flex items-center space-x-6">
          <img src="land9.jpeg" alt="" className="h-40 w-40" />
          <div>
            <h3 className="text-lg font-bold">GEMINI</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-10">
        {/* Cancer */}
        <div className="flex items-center space-x-6">
          <img src="land7.jpeg" alt="" className="h-40 w-40" />
          <div>
            <h3 className="text-lg font-bold">CANCER</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        {/* Leo */}
        <div className="flex items-center space-x-6">
          <img src="land4.jpeg" alt="" className="h-40 w-40" />
          <div>
            <h3 className="text-lg font-bold">LEO</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        {/* Virgo */}
        <div className="flex items-center space-x-6">
          <img src="land8.jpeg" alt="" className="h-40 w-40" />
          <div>
            <h3 className="text-lg font-bold">VIRGO</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Button */}
    <div className="flex justify-center mt-12">
      <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
        See More
      </button>
    </div>
  </div>
</section>

<Footer/>
    </div>
  );
}

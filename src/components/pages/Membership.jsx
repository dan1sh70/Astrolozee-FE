// MembershipPlans.jsx
import React from "react";

export default function MembershipPlans() {
  const plans = [
    {
      title: "Celestial Seeker",
      subtitle: "Basic Membership",
      features: [
        "Basic natal chart analysis",
        "Monthly newsletter with celestial insights",
        "Member-only discounts on special readings and services",
      ],
      price: "$9.99/month",
      button: "Subscribe Now",
      popular: false,
    },
    {
      title: "Celestial Explorer",
      subtitle: "Premium Membership",
      features: [
        "All features of the Celestial Seeker plan",
        "Access to daily horoscopes",
        "Exclusive early access to monthly astrological forecasts",
      ],
      price: "$19.99/month",
      button: "Subscribe Now",
      popular: true,
    },
    {
      title: "Celestial Visionary",
      subtitle: "VIP Membership",
      features: [
        "All features of the Celestial Explorer plan",
        "Exclusive access to webinars and workshops",
        "Personalized monthly guidance sessions with a professional astrologer",
      ],
      price: "$49.99/month",
      button: "Subscribe Now",
      popular: false,
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
        Check Our Membership Plan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-400 rounded-lg shadow-md p-8 text-center flex flex-col"
          >
            {/* Popular Ribbon */}
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-bl-lg">
                Popular
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800">
              {plan.title}
            </h3>
            <p className="text-gray-700 italic mb-6">{plan.subtitle}</p>

            {/* Features */}
            <ul className="text-gray-700 text-sm flex-1 space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {/* Price */}
            <p className="text-2xl font-bold text-black mb-6">{plan.price}</p>

            {/* Button */}
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded shadow-md transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// components/AboutUs.tsx
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h2>

        {/* Blue underline */}
        <div className="mt-3 flex justify-center">
          <span className="w-16 h-1 bg-blue-900 rounded-full" />
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
          We have years of experience in real estate and a strong commitment
          to excellence and innovation. We provide quality services to build
          relationships with clients and help them achieve their goals by
          communicating clearly.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="px-8 py-3 border border-blue-900 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-900 hover:text-white transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

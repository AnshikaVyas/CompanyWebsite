// components/WhyChooseUs.tsx
import React from "react";

const features = [
  {
    title: "Potential ROI",
    description:
      "Maximize returns with market insights and data-backed decisions.",
    image: "/images/team1.jpg",
  },
  {
    title: "Design",
    description:
      "Modern presentation that attracts buyers and builds trust.",
    image: "/images/team2.jpg",
  },
  {
    title: "Marketing",
    description:
      "Strategic campaigns that get real visibility and real results.",
    image: "/images/team3.jpg",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Why Choose Us?
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

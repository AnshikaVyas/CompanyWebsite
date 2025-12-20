// components/Average.tsx
import React from "react";

const Average: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <span className="text-blue-900 font-semibold uppercase tracking-wide">
            Not Your Average Realtor
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            We redefine how real estate works
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg">
            We combine data-driven insights, modern design, and proven marketing
            strategies to help you buy or sell smarter.
          </p>
        </div>

        {/* Images */}
        <div className="relative flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/man1.jpg"
              alt="Man 1"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
            <img
              src="/images/man2.jpg"
              alt="Man 2"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
            <img
              src="/images/man3.jpg"
              alt="Man 3"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover col-span-2 mx-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Average;

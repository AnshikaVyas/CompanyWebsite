// =======================
// src/components/Header.tsx
// =======================
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                        R
                    </div>
                    <span className="text-xl font-semibold text-gray-800">Real Trust</span>
                </div>

                <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
                    <a href="#" className="hover:text-blue-600">Home</a>
                    <a href="#" className="hover:text-blue-600">Services</a>
                    <a href="#" className="hover:text-blue-600">About Project</a>
                    <a href="#" className="hover:text-blue-600">Testimonials</a>
                </nav>

                <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-medium hover:bg-orange-600">
                    Contact
                </button>
            </div>
        </header>
    );
};

export default Header;

// =======================
// src/components/ContactUs.tsx
// =======================
import React, { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";

interface ContactFormData {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
}

const API_BASE: string = import.meta.env.VITE_LOCALHOST as string;

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            await axios.post(`${API_BASE}/contacts`, formData, {
                headers: { "Content-Type": "application/json" },
            });

            setMessage("Your request has been submitted successfully.");
            setFormData({ fullName: "", email: "", mobile: "", city: "" });
        } catch {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE - IMAGE + TEXT */}
                <div>
                    <img
                        src="/contact-us.jpg"
                        alt="Contact Us"
                        className="w-full max-w-md mb-6 rounded-lg shadow-md"
                    />

                    <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                        Consultation, <br /> Design, <br /> & Marketing
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-md">
                        We help you find the best solutions through expert consultation and strategic planning.
                    </p>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
                    <h2 className="text-white text-xl font-semibold mb-6">
                        Get a Free Consultation
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded bg-white focus:outline-none"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded bg-white focus:outline-none"
                            required
                        />

                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded bg-white focus:outline-none"
                            required
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded bg-white focus:outline-none"
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600 disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Get Quick Quote"}
                        </button>

                        {message && (
                            <p className="text-sm text-white mt-2">{message}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

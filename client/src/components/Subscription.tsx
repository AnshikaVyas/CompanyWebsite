// components/Subscription.tsx
import React, { useState } from "react";
import axios from "axios";

const API_BASE: string = import.meta.env.VITE_LOCALHOST as string;

const Subscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      await axios.post(
        `${API_BASE}/subscriptions`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setMessage("You have been subscribed successfully.");
      setEmail("");
    } catch (error) {
      setMessage("Subscription failed. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative flex h-90 w-full items-center justify-center md:h-105"
      style={{
        backgroundImage: "url('/images/office.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-4 text-center">
        <p className="text-lg leading-relaxed font-medium text-white md:text-xl">
          Learn more about our listing process, as well as our additional
          staging and design work.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full rounded-md bg-white/50 px-4 py-3 text-sm text-gray-900 outline-none sm:w-72"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-gray-100 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-white/90">{message}</p>}
      </div>
    </section>
  );
};

export default Subscription;

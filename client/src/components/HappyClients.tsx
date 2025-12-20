// components/HappyClients.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Client {
  name: string;
  designation: string;
  description: string;
  imageUrl: string;
}

const API_BASE: string = import.meta.env.VITE_LOCALHOST as string;

const HappyClients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get<Client[]>(`${API_BASE}/clients`);
        setClients(response.data);
      } catch {
        setError("Failed to load clients.");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-blue-900 md:text-4xl">
          Happy Clients
        </h2>

        {/* Loading */}
        {loading && (
          <p className="mt-12 text-center text-gray-500">Loading clients...</p>
        )}

        {/* Error */}
        {error && <p className="mt-12 text-center text-red-600">{error}</p>}

        {/* Clients Grid */}
        {!loading && !error && (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {clients.map((client, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                {/* Image */}
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {client.description}
                </p>

                {/* Name */}
                <h4 className="mt-4 text-sm font-semibold text-blue-900">
                  {client.name}
                </h4>

                {/* Designation */}
                <span className="text-xs text-gray-500">
                  {client.designation}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HappyClients;

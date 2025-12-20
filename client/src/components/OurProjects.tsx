// components/OurProjects.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
}

const API_BASE: string = import.meta.env.VITE_LOCALHOST as string;

const OurProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(`${API_BASE}/projects`);
        setProjects(response.data);
      } catch (err) {
        setError("Failed to load projects.");
        console.log("Error");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="w-full bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* States */}
        {loading && (
          <p className="mt-12 text-center text-gray-500">Loading projects...</p>
        )}

        {error && <p className="mt-12 text-center text-red-600">{error}</p>}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="h-48 w-full object-cover"
                />

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {project.name}
                  </h3>

                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {project.description}
                  </p>

                  <button className="mt-4 self-start rounded-md bg-orange-500 px-5 py-2 text-xs font-semibold text-white transition hover:bg-orange-600">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProjects;

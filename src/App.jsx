import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { name: "Projects", icon: "📂" },
  { name: "Professional Experience", icon: "💼" },
  { name: "Academics", icon: "🎓" },
  { name: "Resume", icon: "📄" }
];

const projects = [
  {
    title: "Project 1",
    description: "A cool project I worked on.",
    image: "https://via.placeholder.com/300",
    techStack: "React, Node.js, MongoDB",
    liveLink: "#",
    repoLink: "#",
  }
];

export default function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {!selectedSection ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold text-red-600 mb-6">Who's Watching?</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedSection(section.name)}>
                <div className="w-32 h-32 bg-gray-800 flex items-center justify-center text-5xl rounded-full border-4 border-transparent hover:border-red-600">
                  {section.icon}
                </div>
                <span className="mt-4 text-xl font-semibold text-gray-300 hover:text-white">{section.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button className="mb-4 bg-gray-700 p-2 rounded" onClick={() => setSelectedSection(null)}>Back</button>
          <h1 className="text-4xl font-bold text-red-600 mb-6">{selectedSection}</h1>
          {selectedSection === "Projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative bg-gray-900 p-4 rounded-lg">
                  <img src={project.image} alt={project.title} className="w-full rounded" />
                  <h2 className="text-xl font-bold mt-2">{project.title}</h2>
                  <p className="text-gray-400">{project.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
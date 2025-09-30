import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../lib/portfolioWorks";
import { renderTeam, renderTechBadges } from "../lib/renderTeam";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [showProjects, setShowProjects] = useState(projects.slice(0, 4));

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleShowMore = () => {
    const nextProjects = projects.slice(
      showProjects.length,
      showProjects.length + 4
    );
    setShowProjects([...showProjects, ...nextProjects]);
    setVisibleCount(visibleCount + nextProjects.length);
  };

  return (
    <section
      id="projects"
      className="bg-black text-white px-4 md:px-10 py-16 flex flex-col justify-center bg-gradient-to-b from-black-900 via-gray-950 to-black"
    >
      {/* Заголовок */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          — My Work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
          Explore My{" "}
          <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>
      </div>

      {/* Grid з карточками */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {showProjects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-neutral-900/60 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              layout
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    View Details
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.alt}</h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {project.description}
                </p>
                {renderTechBadges(project.technologies)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleCount < projects.length && (
        <button
          onClick={handleShowMore}
          className="mt-10 mx-auto px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors duration-300"
        >
          Show More
        </button>
      )}

      {/* Модалка */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-white transition"
              >
                &times;
              </button>

              {/* Image */}
              <motion.div
                className="md:w-1/2 w-full h-48 md:h-auto relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex-1 p-6 md:p-10 flex flex-col justify-center text-white space-y-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold">{selectedProject.alt}</h3>
                <p className="text-gray-300">{selectedProject.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-400">Date</h4>
                    <p>{selectedProject.date}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-400">Link</h4>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline break-all"
                    >
                      {selectedProject.link}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-400 mb-2">
                    Technologies
                  </h4>
                  {renderTechBadges(selectedProject.technologies)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-400 mb-2">
                    Created by
                  </h4>
                  {renderTeam(selectedProject.team)}
                </div>

                <div className="pt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full font-semibold bg-gray-800 hover:bg-gray-700 transition transform hover:scale-105"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


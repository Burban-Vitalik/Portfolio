"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../lib/skillsList";

export function SkillsSection() {
  const [modalData, setModalData] = useState<{
    category: string;
    techs: typeof skills.frontend;
  } | null>(null);

  const LIMIT = 5;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalData(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeModal = () => setModalData(null);

  return (
    <section
      id="skills"
      className="relative w-full bg-gradient-to-b from-black-900 via-gray-950 to-black text-white py-12 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-6xl w-full px-6 text-center">
        <p className="text-gray-400 mb-2 uppercase tracking-widest">
          — My Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
          WHAT I KNOW
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, techs]) => {
            const showModal = techs.length > LIMIT;

            return (
              <motion.div
                key={category}
                className="flex flex-col hover:scale-105 items-center p-7 cursor-pointer bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setModalData({ category, techs })}
              >
                <h3 className="text-xl font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="flex flex-wrap justify-center gap-3">
                  {techs.slice(0, LIMIT).map(({ name, icon: Icon, color }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/30 transition-all duration-300 cursor-default hover:bg-gray-700/40"
                    >
                      <Icon className="text-2xl" style={{ color }} />
                      <span className="text-sm sm:text-base">{name}</span>
                    </li>
                  ))}
                  {showModal && (
                    <li className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/30 cursor-pointer hover:bg-gray-700/40">
                      <button
                        onClick={() => setModalData({ category, techs })}
                        className="text-sm sm:text-base font-medium text-white"
                      >
                        +{techs.length - LIMIT} more
                      </button>
                    </li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-neutral-900 rounded-3xl p-6 md:p-10 max-w-xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 300 },
              }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white tracking-wide">
                {modalData.category.toUpperCase()}
              </h3>

              <ul className="flex flex-wrap gap-3 justify-center">
                {modalData.techs.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-800/30 hover:bg-neutral-700/50 transition-all duration-300 shadow-sm"
                  >
                    <Icon className="text-2xl" style={{ color }} />
                    <span className="text-sm sm:text-base font-medium">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={closeModal}
                className="mt-6 w-full py-3 rounded-full bg-neutral-700 hover:bg-neutral-600 text-white font-semibold shadow-md transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


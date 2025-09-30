import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../lib/services";

export const ServiceSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  // Відстеження центру і автоскрол
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cards = Array.from(track.children) as HTMLDivElement[];
      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(
          rect.left + rect.width / 2 - window.innerWidth / 2
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setCenterIndex(closestIndex);
    };

    track.addEventListener("scroll", handleScroll);
    handleScroll();

    const interval = setInterval(() => {
      const cards = Array.from(track.children) as HTMLDivElement[];
      if (!cards.length) return;
      const nextIndex = (centerIndex + 1) % cards.length;
      const nextCard = cards[nextIndex];
      if (nextCard) {
        track.scrollTo({
          left:
            nextCard.offsetLeft -
            track.offsetWidth / 2 +
            nextCard.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [centerIndex]);

  return (
    <section
      id="service"
      className="relative bg-black text-white py-24 overflow-hidden bg-gradient-to-b from-black-900 via-gray-950 to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-2 uppercase tracking-widest">
            — My Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            WHAT I&apos;M OFFERING
          </h2>
        </div>

        {/* Gradient fade по краях */}
        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-black/70 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-black/70 to-transparent pointer-events-none z-10" />

        {/* Slider */}
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 md:gap-10 px-4 p-7 overflow-x-auto scroll-smooth snap-x snap-proximity no-scrollbar"
        >
          {SERVICES.map((s, i) => {
            const isActive = i === centerIndex;
            const scale = isActive ? 1 : 0.85;
            const opacity = isActive ? 1 : 0.5;

            return (
              <motion.article
                key={s.id}
                className="snap-center flex-shrink-0 bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-[80%] sm:w-[45%] md:w-[32%] lg:w-[30%] cursor-pointer"
                animate={{ scale, opacity }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <div className="text-sm text-gray-400">{s.subtitle}</div>
                  </div>
                </div>

                <p className="text-gray-300 mt-4">{s.description}</p>

                <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-300">
                  {s.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="mt-6 flex hidden justify-end">
                  <button className="text-sm  text-gray-300 hover:text-white flex items-center gap-2 transition">
                    Read more →
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};


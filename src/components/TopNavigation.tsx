import { useEffect, useState } from "react";
import myLogo from "../assets/myPhoto.png";

const NAV_ITEMS = ["home", "service", "skills", "projects"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="text-white z-50 px-6 md:px-10 fixed top-0 left-0 w-full backdrop-blur-md bg-transparent border-white/10 shadow-sm">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={myLogo} className="w-10 md:w-12" alt="Logo" />
          <p className="text-xl md:text-2xl font-semibold tracking-wide">
            Burban Vitalik
          </p>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-base font-medium tracking-wide">
          {NAV_ITEMS.map((item) => (
            <li
              key={item}
              className={`capitalize cursor-pointer transition-all duration-300 ${
                active === item
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={() => {
                const el = document.getElementById(item);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden h-screen px-6 pb-6 flex flex-col justify-center items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                const el = document.getElementById(item);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                setMenuOpen(false); // закриваємо моб. меню
              }}
              className={`transition-all duration-300 cursor-pointer text-lg font-medium tracking-wide py-2 ${
                active === item
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}


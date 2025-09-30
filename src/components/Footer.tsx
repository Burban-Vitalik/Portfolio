"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-400 py-8 px-8 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
        {/* Ліва частина */}
        <span className="text-gray-500">
          © {year} Burban Vitalik — Lviv, Ukraine
        </span>

        {/* Права частина */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/Burban-Vitalik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/burban-vitalik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="burbanvitalik2002@gmail.com"
            className="hover:text-gray-300 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://t.me/vitalik_vitalik2002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}


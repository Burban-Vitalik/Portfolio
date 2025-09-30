import { PhoneIcon } from "lucide-react";
import myPhoto from "../assets/myPhoto.png";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";
import myResume from "../assets/myresume.pdf";

export function HomeSection() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/vitalik-burban-161864202/",
    },
    { icon: FaGithub, href: "https://github.com/Burban-Vitalik" },
    { icon: FaTelegram, href: "https://t.me/vitalik_vitalik2002" },
    { icon: FaEnvelope, href: "burbanvitalik2002@gmail.com" },
    { icon: PhoneIcon, href: "tel:+380951341843" },
  ];

  const hoverColors = [
    "hover:text-blue-500",
    "hover:text-white",
    "hover:text-sky-400",
    "hover:text-red-400",
    "hover:text-green-400",
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-10 bg-gradient-to-b from-black-900 via-gray-950 to-black relative"
    >
      {/* Left Text */}
      <div className="flex flex-col justify-center max-w-xl text-center md:text-left gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          Hire Me <br />
          To Create <br />
          Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Website
          </span>
        </h1>
        <p className="text-base sm:text-md text-gray-400 leading-relaxed">
          I'm a professional web developer building responsive, modern websites
          tailored to your business.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
          <a
            href={myResume}
            download
            className="px-6 py-3 rounded-full font-semibold text-white border border-gray-200  shadow-md hover:shadow-lg transition transform hover:scale-105 hover:bg-gradient-to-r"
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/burban-vitalik/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-400 shadow-md hover:shadow-lg transition transform hover:scale-105"
          >
            Message on LinkedIn
          </a>
        </div>
      </div>

      {/* Center Image */}
      <div className="relative flex justify-center md:justify-end w-full md:w-auto">
        <img
          src={myPhoto}
          alt="My Photo"
          className="max-h-[50vh] sm:max-h-[60vh] md:max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl"
        />

        {/* Right Socials */}
        <div className="hidden md:flex flex-col items-center gap-6 absolute right-[-80px] top-1/2 -translate-y-1/2">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition text-3xl ${hoverColors[idx]} hover:scale-110`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}


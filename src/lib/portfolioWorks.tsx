import PizaProjectImg from "../assets/portfolio/udg.png";
import BWEProjectImg from "../assets/portfolio/bwe.png";
import GoldenProjectImg from "../assets/portfolio/golden.png";
import WeatherProjectImg from "../assets/portfolio/weather.png";
import CarProjectImg from "../assets/portfolio/car.png";
import HeyFriendProjectImg from "../assets/portfolio/heyFriends.png";
import AdventureProjectImg from "../assets/portfolio/adventure.png";

import VitalikImg from "../assets/people/vitalik.jpg";
import NazarImg from "../assets/people/nazar.jpg";
import MaryanImg from "../assets/people/maryan.jpg";

export const projects = [
  {
    id: 1,
    image: PizaProjectImg,
    alt: "UDG Project",
    description:
      "This project was developed for a construction company to showcase their identity, completed projects, and provide valuable information to clients. The website features a modern design, easy navigation, and is optimized for different devices through responsive design.",
    date: "June 2024",
    link: "https://nazar121.github.io/projects/udg/index.html",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery"],
    team: [
      {
        name: "Vitalik Burban",
        avatar: VitalikImg,
        linkedin: "https://www.linkedin.com/in/vitalik-burban-161864202/",
      },
      {
        name: "Nazar Burban",
        avatar: NazarImg,
        linkedin: "https://www.linkedin.com/in/nazar-burban-6b3a58141/",
      },
      {
        name: "Maryan Burban",
        avatar: MaryanImg,
        linkedin: "https://www.linkedin.com/in/marian-b-5b22ba224/",
      },
    ],
  },

  //   Project 2
  {
    id: 2,
    image: BWEProjectImg,
    alt: "BWE Website",
    description:
      "Brian Ward Electrical is a website developed for a company providing domestic and commercial electrical services across Scotland. The project focused on clean coding, responsive design, and performance optimization.",
    date: "March 2024",
    link: "https://nazar121.github.io/projects/bwe/index.html",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "JQuery"],
    team: [
      {
        name: "Vitalik Burban",
        avatar: VitalikImg,
        linkedin: "https://www.linkedin.com/in/vitalik-burban-161864202/",
      },
      {
        name: "Nazar Burban",
        avatar: NazarImg,
        linkedin: "https://www.linkedin.com/in/nazar-burban-6b3a58141/",
      },
    ],
  },
  {
    id: 3,
    image: GoldenProjectImg,
    alt: "Golden Website",
    description:
      "The project is a web page designed to showcase specific elements with a focus on high-quality layout and responsiveness. The main goal was to accurately implement the design and create a flexible interface that works seamlessly across different devices and screen resolutions",
    date: "March 2024",
    link: "https://nazar121.github.io/projects/golden/index.html",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "JQuery",
      "GitHub",
      "Gulp",
    ],
    team: [
      {
        name: "Vitalik Burban",
        avatar: VitalikImg,
        linkedin: "https://www.linkedin.com/in/vitalik-burban-161864202/",
      },
      {
        name: "Nazar Burban",
        avatar: NazarImg,
        linkedin: "https://www.linkedin.com/in/nazar-burban-6b3a58141/",
      },
    ],
  },
  {
    id: 5,
    image: WeatherProjectImg,
    alt: "Weather Website",
    description:
      "The project is a web application that combines weather information with the latest news updates. Users can check the weather forecast for their city or any other region and stay informed about current events worldwide. The interface is designed to be simple, user-friendly, and visually modern.",
    date: "March 2024",
    link: "https://weather-com.firebaseapp.com/home",
    technologies: [
      "TypeScript",
      "Firebase",
      "Redux",
      "HTML",
      "CSS",
      "Bootstrap",
      "Angular",
    ],
    team: [
      {
        name: "Vitalik Burban",
        avatar: VitalikImg,
        linkedin: "https://www.linkedin.com/in/vitalik-burban-161864202/",
      },
      {
        name: "Nazar Burban",
        avatar: NazarImg,
        linkedin: "https://www.linkedin.com/in/nazar-burban-6b3a58141/",
      },
    ],
  },
  {
    id: 6,
    image: CarProjectImg,
    alt: "Car Founding Website",
    description:
      "A project that allows you to choose a car and find out its characteristics. This is a simple project written in Next Js",
    date: "2025",
    link: "https://project-car-zzsj.vercel.app/",
    technologies: ["TypeScript", "Next.js", "HTML", "CSS"],
    team: [
      {
        name: "Vitalik Burban",
        avatar: VitalikImg,
        linkedin: "https://www.linkedin.com/in/vitalik-burban-161864202/",
      },
    ],
  },
  {
    id: 7,
    image: HeyFriendProjectImg,
    alt: "Hey Friend Website",
    description:
      "Hey Friend is the name of this project. This project is very similar in both design and logic to Instagram, but also has its own advantages. The website adapts well to both large and small screens. It looks pretty good with illustrations that bring the site to life.",
    date: "2025",
    link: "https://heyfriend.vercel.app/sign/in",
    technologies: ["TypeScript", "React", "HTML", "CSS", "Redux", "Firebase"],
    team: [
      {
        name: "Vitalik Burban",
        avatar: VitalikImg,
        linkedin: "https://www.linkedin.com/in/vitalik-burban-161864202/",
      },
      {
        name: "Maryan Burban",
        avatar: MaryanImg,
        linkedin: "https://www.linkedin.com/in/marian-b-5b22ba224/",
      },
    ],
  },
  {
    id: 8,
    image: AdventureProjectImg,
    alt: "Adventure Website",
    description:
      "This website is called Adventure. The website adapts well to both large and small screens, looks quite good with illustrations of the site, as well as animations that bring the design to life.",
    date: "2025",
    link: "https://adventure-tour.vercel.app/",
    technologies: ["JavaScript", "HTML", "CSS", "Gulp", "Git"],
    team: [
      {
        name: "Vitalik Burban",
        avatar: VitalikImg,
        linkedin: "https://www.linkedin.com/in/vitalik-burban-161864202/",
      },
    ],
  },
];


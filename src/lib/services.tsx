import { Monitor, Code, Server, Feather, Zap, Box, Cloud } from "lucide-react";

type ServiceItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    subtitle: "React · Next.js · TypeScript",
    description:
      "Modern SPA/SSR applications with responsive UI and high-quality code.",
    bullets: [
      "Pixel-perfect layout from Figma/XD",
      "Component architecture, state management",
      "Accessibility & cross-browser support",
    ],
    icon: <Monitor size={24} className="text-pink-400" />,
  },
  {
    id: 2,
    title: "Full-Stack Development",
    subtitle: "Node.js · Express · Databases",
    description:
      "End-to-end development: frontend + backend, authentication, data storage.",
    bullets: [
      "REST / GraphQL API",
      "Auth (JWT / OAuth), roles",
      "MongoDB / PostgreSQL integration",
    ],
    icon: <Server size={24} className="text-purple-400" />,
  },
  {
    id: 3,
    title: "API & Integrations",
    subtitle: "REST · GraphQL · 3rd-party",
    description:
      "I design and implement reliable APIs and connect external services.",
    bullets: [
      "OpenAPI/Swagger documentation",
      "Integrations (payments, analytics, CRMs)",
      "Scalability and security",
    ],
    icon: <Code size={24} className="text-blue-400" />,
  },
  {
    id: 4,
    title: "UI Integration",
    subtitle: "MUI · Tailwind · Component libraries",
    description:
      "I implement designs into working components and reusable libraries.",
    bullets: [
      "Theme setup, tokens, design tokens",
      "Reusable components (buttons, forms, tables)",
      "Pixel-perfect match to the design",
    ],
    icon: <Feather size={24} className="text-teal-400" />,
  },
  {
    id: 5,
    title: "Performance & SEO",
    subtitle: "Optimization · Lighthouse",
    description:
      "Fast pages + technical SEO — better ranking and user experience.",
    bullets: [
      "Code splitting, lazy loading",
      "Image and asset optimization",
      "Lighthouse & Core Web Vitals",
    ],
    icon: <Zap size={24} className="text-yellow-400" />,
  },
  {
    id: 6,
    title: "Design Systems",
    subtitle: "Consistency · Scalability",
    description:
      "I build design systems for consistency and fast, stable development.",
    bullets: [
      "Storybook / Documentation",
      "Tokens, variants, accessibility",
      "Versioning & releases",
    ],
    icon: <Box size={24} className="text-orange-400" />,
  },
  {
    id: 7,
    title: "Deploy & DevOps",
    subtitle: "Vercel · Docker · CI/CD",
    description:
      "I set up deployment, CI/CD, and infrastructure for reliable operation.",
    bullets: [
      "Docker, GitHub Actions / CI",
      "Deployment on Vercel / Netlify / Render",
      "Monitoring & logs",
    ],
    icon: <Cloud size={24} className="text-cyan-400" />,
  },
];


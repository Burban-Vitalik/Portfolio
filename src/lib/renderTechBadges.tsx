import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiJest,
  SiCypress,
  SiStyledcomponents,
  SiWeb3Dotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiGulp,
  SiFirebase,
  SiAngular,
} from "react-icons/si";

export function getTechBadge(name: string) {
  const techMap: Record<string, { icon: React.ElementType; color: string }> = {
    React: { icon: SiReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
    TailwindCSS: { icon: SiTailwindcss, color: "#38BDF8" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
    Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
    JQuery: { icon: SiJquery, color: "#0769AD" },
    Redux: { icon: SiRedux, color: "#764ABC" },
    "Framer Motion": { icon: SiFramer, color: "#E10098" },
    "Node.js": { icon: SiNodedotjs, color: "#68A063" },
    NestJS: { icon: SiNestjs, color: "#E0234E" },
    Prisma: { icon: SiPrisma, color: "#2D3748" },
    PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
    MongoDB: { icon: SiMongodb, color: "#47A248" },
    GraphQL: { icon: SiGraphql, color: "#E10098" },
    Docker: { icon: SiDocker, color: "#2496ED" },
    Git: { icon: SiGit, color: "#F05032" },
    GitHub: { icon: SiGithub, color: "#FFFFFF" },
    Vercel: { icon: SiVercel, color: "#FFFFFF" },
    Jest: { icon: SiJest, color: "#99425B" },
    Gulp: { icon: SiGulp, color: "#CF4647" },
    Cypress: { icon: SiCypress, color: "#69D3A7" },
    "Styled Components": { icon: SiStyledcomponents, color: "#DB7093" },
    "Web3.js": { icon: SiWeb3Dotjs, color: "#F16822" },
    "React Native": { icon: SiReact, color: "#61DAFB" },
    HTML: { icon: SiHtml5, color: "#61DAFB" },
    CSS: { icon: SiCss3, color: "#61DAFB" },
    Firebase: { icon: SiFirebase, color: "#FFCA28" },
    Angular: { icon: SiAngular, color: "#DD0031" },
  };

  const tech = techMap[name];
  if (!tech) {
    return (
      <span className="px-3 py-1 rounded-full bg-gray-700/60 text-sm text-white">
        {name}
      </span>
    );
  }

  const Icon = tech.icon;
  return (
    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/40">
      <Icon className="text-lg" style={{ color: tech.color }} />
      <span className="text-sm">{name}</span>
    </span>
  );
}


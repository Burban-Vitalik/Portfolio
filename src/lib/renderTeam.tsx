import { getTechBadge } from "../lib/renderTechBadges";

type TeamMember = {
  name: string;
  avatar: string;
  linkedin: string;
};

function renderTeam(team: TeamMember[]) {
  const visible = team.slice(0, 3);
  const extra = team.length - visible.length;

  return (
    <div className="flex items-center gap-2 mt-2">
      {visible.map((member, i) => (
        <a
          key={i}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <img
            src={member.avatar}
            alt={member.name}
            className="w-10 h-10 rounded-full border border-white/20 object-cover transition-transform hover:scale-110 hover:border-pink-400"
          />
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition bg-black/70 text-white px-2 py-0.5 rounded-md whitespace-nowrap">
            {member.name}
          </span>
        </a>
      ))}
      {extra > 0 && (
        <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-semibold">
          +{extra}
        </div>
      )}
    </div>
  );
}

function renderTechBadges(technologies: string[]) {
  return (
    <ul className="flex flex-wrap gap-2 mt-2">
      {technologies.map((tech) => getTechBadge(tech))}
    </ul>
  );
}

export { renderTeam, renderTechBadges };


import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  skills,
  image,
  visitURL,
  repoURL,
  onViewDetails,
}) => {
  return (
    <div className="group flex w-full flex-col justify-between rounded-4xl border border-white/10 bg-[#282828]/40 p-8 shadow-2xl backdrop-blur-3xl duration-300 hover:border-[#1DB954]/50 md:w-90">
      <div className="mb-6 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
      </div>

      <button
        type="button"
        onClick={onViewDetails}
        className="relative h-44 w-full cursor-pointer overflow-hidden rounded-2xl bg-white/5 text-left"
        aria-label={`View details for ${title}`}
      >
        <img
          src={image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-white/20 bg-black/50 px-4 py-1.5 font-google-sans text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            View Details
          </span>
        </div>
      </button>

      <p className="my-6 line-clamp-3 font-source text-sm leading-relaxed text-white/70">
        {description}
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {skills?.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-white/60 transition-colors hover:bg-[#1DB954]/10 hover:text-[#1DB954]"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider">
              {skill}
            </p>
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={visitURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-bold text-black shadow-xl transition-all duration-300 hover:bg-[#1DB954] hover:text-white"
        >
          Visit <FiExternalLink size={16} />
        </a>

        <a
          href={repoURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#181818] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
          title="Source Code"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

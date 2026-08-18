import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({
  title,
  summary,
  problem,
  skills,
  image,
  visitURL,
  repoURL,
  onViewDetails,
}) => {
  const stackPreview = skills?.slice(0, 3).join(" · ");

  return (
    <article className="group glass-card flex h-full w-full flex-col overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue/5">
      <button
        type="button"
        onClick={onViewDetails}
        className="relative h-48 w-full cursor-pointer overflow-hidden bg-white/5 text-left sm:h-52"
        aria-label={`Open details for ${title}`}
      >
        <img
          src={image}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          alt={title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black-primary/90 via-black-primary/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="mb-1 font-google-sans text-lg font-bold text-white">
            {title}
          </p>
          <p className="line-clamp-1 text-xs uppercase tracking-widest text-white/45">
            {stackPreview}
          </p>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-2 font-google-sans text-xs font-bold uppercase tracking-wider text-white/40">
          Problem
        </p>
        <p className="mb-4 line-clamp-2 flex-1 font-source text-sm leading-relaxed text-white/60">
          {problem}
        </p>
        <p className="mb-6 line-clamp-1 font-source text-xs text-white/40">
          {summary}
        </p>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex cursor-pointer items-center gap-1.5 font-google-sans text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            View details
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <div className="relative z-10 flex items-center gap-1">
            <a
              href={visitURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              title="Visit live site"
              aria-label={`Visit ${title} live site`}
            >
              <FiArrowUpRight size={16} />
            </a>

            <a
              href={repoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              title="Source code"
              aria-label={`View ${title} source code on GitHub`}
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

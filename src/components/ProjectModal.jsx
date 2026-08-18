import React, { useEffect } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <Motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <Motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-4xl border border-white/10 bg-[#282828]/40 p-6 shadow-2xl backdrop-blur-3xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="h-3 w-3 rounded-full bg-[#ff5f56] transition-opacity hover:opacity-80"
                aria-label="Close modal"
              />
              <span
                className="h-3 w-3 rounded-full bg-[#ffbd2e]"
                aria-hidden="true"
              />
              <span
                className="h-3 w-3 rounded-full bg-[#27c93f]"
                aria-hidden="true"
              />
            </div>

            <div className="overflow-y-auto pr-1">
              <div className="relative mb-6 h-44 overflow-hidden rounded-2xl bg-white/5 sm:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3
                id="project-modal-title"
                className="mb-4 font-google-sans text-xl font-bold text-white sm:text-2xl"
              >
                {project.title}
              </h3>

              <span className="mb-6 block h-px w-full max-w-80 bg-linear-to-r from-transparent via-white to-transparent" />

              <p className="mb-6 font-source text-sm leading-relaxed text-white/70 sm:text-base">
                {project.details}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.skills?.map((skill) => (
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
                {project.visitURL && (
                  <a
                    href={project.visitURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-bold text-black shadow-xl transition-all duration-300 hover:bg-[#1DB954] hover:text-white"
                  >
                    Visit <FiExternalLink size={16} />
                  </a>
                )}

                {project.repoURL && (
                  <a
                    href={project.repoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#181818] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
                    title="Source Code"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

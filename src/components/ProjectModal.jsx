import React, { useEffect } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiX } from "react-icons/fi";

const SECTION_LABEL =
  "mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40";

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
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-4xl border border-white/10 bg-[#282828]/95 shadow-2xl backdrop-blur-3xl sm:rounded-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid max-h-[92vh] overflow-hidden md:grid-cols-[42%_1fr]">
              <div className="relative h-52 shrink-0 bg-white/5 md:h-auto md:min-h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover md:absolute md:inset-0"
                />
                <div className="absolute inset-0 hidden bg-linear-to-r from-transparent to-[#282828]/80 md:block" />
              </div>

              <div className="flex min-h-0 flex-col">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-7">
                  <div className="min-w-0">
                    <p className={SECTION_LABEL}>Project</p>
                    <h3
                      id="project-modal-title"
                      className="font-google-sans text-2xl font-bold leading-tight text-white sm:text-3xl"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 font-source text-sm text-white/55">
                      {project.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                    aria-label="Close project details"
                  >
                    <FiX size={18} />
                  </button>
                </div>

                <div className="flex-1 space-y-6 overflow-y-auto px-5 py-6 sm:px-7">
                  <section>
                    <h4 className={SECTION_LABEL}>Problem</h4>
                    <p className="font-source text-sm leading-7 text-white/65 sm:text-base">
                      {project.problem}
                    </p>
                  </section>

                  <section>
                    <h4 className={SECTION_LABEL}>Solution</h4>
                    <p className="font-source text-sm leading-7 text-white/65 sm:text-base">
                      {project.solution}
                    </p>
                  </section>

                  <section>
                    <h4 className={SECTION_LABEL}>My contribution</h4>
                    <p className="font-source text-sm leading-7 text-white/65 sm:text-base">
                      {project.contribution}
                    </p>
                  </section>

                  {project.engineering?.length > 0 && (
                    <section>
                      <h4 className={SECTION_LABEL}>Engineering</h4>
                      <ul className="space-y-2 font-source text-sm leading-7 text-white/65 sm:text-base">
                        {project.engineering.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span
                              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  <section>
                    <h4 className={SECTION_LABEL}>Outcome</h4>
                    <p className="font-source text-sm leading-7 text-white/65 sm:text-base">
                      {project.outcome}
                    </p>
                  </section>

                  <section>
                    <h4 className={SECTION_LABEL}>Stack</h4>
                    <p className="font-google-sans text-sm text-white/75">
                      {project.skills?.join(" · ")}
                    </p>
                  </section>
                </div>

                <div className="flex gap-3 border-t border-white/10 px-5 py-4 sm:px-7">
                  {project.visitURL && (
                    <a
                      href={project.visitURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
                    >
                      Visit live
                      <FiArrowUpRight size={16} />
                    </a>
                  )}

                  {project.repoURL && (
                    <a
                      href={project.repoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:scale-[0.98]"
                    >
                      <FaGithub size={18} />
                      View code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

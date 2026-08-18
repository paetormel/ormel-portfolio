import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { motion as Motion } from "motion/react";
import { PROJECTS } from "./constant/data";
import { useMotionConfig } from "../utils/motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { fadeUp, fadeIn } = useMotionConfig();

  return (
    <section
      id="projects"
      className="scroll-mt-24 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 sm:px-6 md:py-28 lg:px-10"
      aria-labelledby="projects-heading"
    >
      <div className="mb-12 w-full text-center md:mb-16">
        <Motion.h2
          id="projects-heading"
          {...fadeUp(0.1)}
          className="section-heading pb-1 uppercase"
        >
          Projects
        </Motion.h2>
        <span className="section-divider" />

        <Motion.p
          {...fadeUp(0.15)}
          className="mx-auto mt-6 max-w-2xl font-google-sans text-sm leading-relaxed text-white/50 sm:text-base"
        >
          Each project started from a concrete problem and shipped as a working
          application. Open any card for context, implementation details, and
          source code.
        </Motion.p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {PROJECTS.map((project, index) => (
          <Motion.div key={project.title} {...fadeIn(index * 0.08)}>
            <ProjectCard
              title={project.title}
              summary={project.summary}
              problem={project.problem}
              skills={project.skills}
              image={project.image}
              visitURL={project.visitURL}
              repoURL={project.repoURL}
              onViewDetails={() => setSelectedProject(project)}
            />
          </Motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;

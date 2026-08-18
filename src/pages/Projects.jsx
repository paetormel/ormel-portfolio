import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { motion as Motion } from "motion/react";
import { PROJECTS } from "./constant/data";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="mx-auto mb-24 flex min-h-screen w-full max-w-[1440px] flex-col items-center gap-5 px-4 sm:px-6 lg:mb-32 lg:px-10"
      aria-labelledby="projects-heading"
    >
      <div className="mt-16 mb-16 overflow-hidden px-4 font-google-sans text-5xl font-black leading-[0.8] tracking-tighter md:mt-20 md:mb-20 md:text-[11rem]">
        <Motion.h2
          id="projects-heading"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="pb-2 uppercase text-white"
        >
          Projects
        </Motion.h2>
        <span className="mx-auto mt-10 block h-px w-full max-w-80 bg-linear-to-r from-transparent via-white to-transparent"></span>
      </div>

      <div className="mx-5 grid w-full max-w-6xl grid-cols-1 justify-center gap-6 md:mx-10 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            skills={project.skills}
            image={project.image}
            visitURL={project.visitURL}
            repoURL={project.repoURL}
            onViewDetails={() => setSelectedProject(project)}
          />
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

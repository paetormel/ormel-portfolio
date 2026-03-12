import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";

const PROJECTS = [
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["ReactJs", "tailwindcss"],
    image: "dashboard.png",
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["React", "tailwindcss", "React Query", "html"],
    image: "Arman Chakhalyan.jpg",
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["React", "tailwindcss", "html", "axios"],
    image: "download (26).jpg",
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["React", "tailwindcss", "html", "axios"],
    image: "Game Store.jpg",
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["React", "tailwindcss", "html", "axios"],
    image: "download (25).jpg",
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["React", "tailwindcss", "html", "axios"],
    image: "Giulio Cuscito.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto mb-24 flex min-h-screen w-full max-w-[1440px] flex-col items-center gap-5 px-4 sm:px-6 lg:mb-32 lg:px-10"
      aria-labelledby="projects-heading"
    >
      <div className="mt-16 mb-16 overflow-hidden px-4 font-google-sans text-5xl font-black leading-[0.8] tracking-tighter md:mt-20 md:mb-20 md:text-[11rem]">
        <motion.h2
          id="projects-heading"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="pb-2 uppercase text-white"
        >
          Projects
        </motion.h2>
        <span className="mx-auto mt-10 block h-px w-full max-w-80 bg-linear-to-r from-transparent via-white to-transparent"></span>
      </div>

      <div className="grid w-full mx-5 md:mx-10 max-w-6xl grid-cols-1 justify-center gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={`${project.image}-${project.title ?? project.description.slice(0, 20)}`}
            description={project.description}
            skills={project.skills}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";

const PROJECTS = [
  {
    description:
      "A sleek, Spotify-inspired Pomodoro timer designed to boost productivity with customizable focus sessions and integrated task management.",
    skills: ["ReactJs","Nextjs","tailwindcss"],
    image: "pomodoro.webp",
    visitURL: "https://pomodoro-app-orcin-six.vercel.app/",
    repoURL: "https://github.com/paetormel/Pomodoro-app"
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["React", "tailwindcss", "React Query", "html"],
    image: "portfolio.webp",
    visitURL: "https://ormel-portfolio-het7.vercel.app/",
    repoURL: "https://github.com/paetormel/ormel-portfolio"
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.",
    skills: ["React", "tailwindcss", "html", "axios"],
    image: "download (26).jpg",
    visitURL: "https://pomodoro-app-orcin-six.vercel.app/",
    repoURL: "https://github.com/paetormel/Pomodoro-app"
  }
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
            visitURL={project.visitURL}
            repoUrl={project.repoURL}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
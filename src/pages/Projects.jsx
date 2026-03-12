import React from 'react'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import {motion} from 'motion/react'

const Projects = () => {
    return (
        <section id='projects' className='flex flex-col   items-center gap-5 px-20 min-h-screen mx-auto mb-50 max-w-[1440px]'>
            <div className="overflow-hidden px-4 mt-20 mb-20 font-google-sanx text-6xl md:text-[11rem] font-black tracking-tighter leading-[0.8]">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-white uppercase pb-2"
          >
            Projects
          </motion.h2>
        </div>
            <div className='flex gap-10 flex-wrap'>
                <ProjectCard description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.' skills={['ReactJs', 'tailwindcss']} image='dashboard.png'/>
                <ProjectCard description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.' skills={['React', 'tailwindcss','React Query', 'html']} image='Arman Chakhalyan.jpg'/>
                <ProjectCard description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.' skills={['React', 'tailwindcss', 'html','axios']} image='download (26).jpg'/>
                <ProjectCard description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.' skills={['React', 'tailwindcss', 'html','axios']} image='Game Store.jpg'/>
                <ProjectCard description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.' skills={['React', 'tailwindcss', 'html','axios']} image='download (25).jpg'/>
                <ProjectCard description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique sit incidunt minima vero explicabo sed, impedit possimus eius molestiae.' skills={['React', 'tailwindcss', 'html','axios']} image='Giulio Cuscito.jpg'/>
            </div>
        </section>
    )
}

export default Projects 
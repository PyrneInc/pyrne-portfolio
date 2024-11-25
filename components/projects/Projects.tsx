import Link from "next/link";
import { FaRegDotCircle } from "react-icons/fa";

export default function Projects() {

  return (
    <section id="projects" className="px-4 lg:px-16 py-20">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="flex flex-wrap justify-center mt-10">
        {
          projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))
        }
      </div>
      <div className="mt-8 flex justify-center items-center">
        <Link
          href="#contact"
          className="
              py-2 px-6 rounded-full 
              bg-electricBlue 
              text-white font-semibold 
              hover:bg-yellow-500 hover:scale-95
              transition-transform duration-300"
        >
          Let's Collab!
        </Link>
      </div>
    </section>
  )
}


type Project = {
  title: string;
  description: string;
  site: string;
  github: string;
  status: "completed" | "ongoing" | "failed";
}

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card w-full md:w-1/3 p-2 lg:p-4">
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transiton">
        <h3 className="text-xl font-bold truncate">{project.title}</h3>
        <p className="mt-2 flex flex-row gap-2 text-sm">
          Status: <span
            className={`
                flex flex-row items-center gap-1
                ${project.status === 'completed' && 'text-green-500'}
                ${project.status === 'ongoing' && 'text-yellow-500'}
                ${project.status === 'failed' && 'text-red-500'}
            `}
          >
            <FaRegDotCircle />
            {project.status}
          </span>
        </p>
        <p className="mt-4 text-metallicGray">
          {project.description}
        </p>
        <div className="tech-stack mt-2 flex flex-row justify-center gap-2">

        </div>
        <div className="mt-2 flex justify-center gap-[20%]">
          <Link
            className="text-electricBlue hover:text-neonGreen"
            href={project.github}
          >
            View on Github
          </Link>
          {project.status === "completed" &&
            <Link
              className="text-electricBlue hover:text-neonGreen"
              href={project.site}
            >
              Live Demo
            </Link>
          }
        </div>
      </div>
    </div>
  )
}


const projects: Project[] = [
  {
    title: "Nairobi Digital Matatu Route Optimization",
    description: "A project aimed at optimizing matatu routes in Nairobi to improve efficiency and reduce congestion.",
    site: "https://example.com/nairobi-matatu",
    github: "https://github.com/username/nairobi-matatu",
    status: "completed",
  },
  {
    title: "Admin Panel for MT-Tech",
    description: "An admin panel built for managing tech-focused operations using React, Remix, and TypeScript.",
    site: "https://example.com/mt-tech-admin-panel",
    github: "https://github.com/username/mt-tech-admin-panel",
    status: "ongoing",
  },
  {
    title: "Social Networking App",
    description: "A social networking app idea with real-time chat and virtual reality integration for watching videos and movies.",
    site: "https://example.com/social-networking-app",
    github: "https://github.com/username/social-networking-app",
    status: "failed",
  },
];

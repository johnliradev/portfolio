"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import Image from "next/image";
import toDoInSilence from "@/assets/todoinsilence.png";
import mailForge from "@/assets/mailforge.png";

const ProjectsData = [
  {
    id: 1,
    name: "Mail Forge",
    dateStart: "4/2025",
    dateEnd: "4/2025",
    description:
      "Mail forge is a smart and efficient tool that helps users create professional or personal emails using artificial intelligence. It streamlines the writing process by providing quick, high-quality drafts based on the user's chosen style and purpose.",
    technologies: [
      "React",
      "Typescript",
      "OPEN AI Api",
      "TailwindCSS",
      "NextJS",
    ],
    linkGit: "https://github.com/johnliradev/mailforge",
    linkSite: "https://mail-forge.vercel.app",
    image: mailForge,
  },
  {
    id: 2,
    name: "To Do in Silence ",
    dateStart: "4/2025",
    dateEnd: "4/2025",
    description:
      "To do in Silence is a simple and minimalist to-do list application designed to combat procrastination. It helps users stay focused by offering a clean and distraction-free interface to organize their daily tasks effectively.",
    technologies: ["React", "Typescript", "TailwindCSS", "NextJS"],
    linkGit: "https://github.com/johnliradev/todoinprivate",
    linkSite: "https://todoinprivate.vercel.app",
    image: toDoInSilence,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(ProjectsData[0]);

  return (
    <Card id="projects" className="flex flex-row p-0  w-full max-w-4xl">
      {/* nav */}
      <div className="flex flex-col   w-64 border-r-1">
        <div className="py-2 text-center font-semibold text-xl">
          <p>PROJETCTS</p>
        </div>
        <Separator />
        <div className="flex flex-col py-2 px-2 gap-2">
          {ProjectsData.map((project, index) => (
            <Button
              key={project.id}
              onClick={() => setSelectedProject(ProjectsData[index])}
              variant="outline"
              className={`cursor-pointer font-medium transition-colors duration-300 ${
                selectedProject.id === project.id
                  ? " dark:bg-white dark:text-black dark:hover:bg-white/90 dark:hover:text-black hover:text-white hover:bg-black  bg-black text-white "
                  : ""
              }`}
            >
              {project.name}
            </Button>
          ))}
        </div>
      </div>
      {/* Show project  */}
      <div className="w-[90%] px-5 py-5 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full px-5">
          <h1 className="text-3xl font-semibold">{selectedProject.name}</h1>

          <p className="text-zinc-500 font-semibold">
            {selectedProject.dateStart} - {selectedProject.dateEnd}
          </p>
        </div>
        <div className="w-[100%] h-[200px] rounded-xl overflow-hidden dark:border-neutral-700 border-neutral-200 border-1 shadow-md">
          <Image
            alt="project preview image"
            src={selectedProject.image}
            width={1000}
          />
        </div>
        <p>{selectedProject.description}</p>
        <p className="text-xl font-semibold ">Technologies used</p>
        <div className="flex gap-3">
          {selectedProject.technologies.map((x, index) => (
            <Badge variant="outline" key={index}>
              {x}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <a target="_black" href={selectedProject.linkGit}>
            <Button className="cursor-pointer" variant="secondary">
              View project code
            </Button>
          </a>
          <a target="_black" href={selectedProject.linkSite}>
            <Button className="cursor-pointer">View Website</Button>
          </a>
        </div>
      </div>
    </Card>
  );
};
export default Projects;

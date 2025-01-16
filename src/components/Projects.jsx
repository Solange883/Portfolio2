/* eslint-disable react/jsx-no-duplicate-props */
import Title from "./Title"

import img1 from "../assets/projects/projet1.png"
import img2 from "../assets/projects/projet2.png"
import img3 from "../assets/projects/1.png"

import { Video } from "lucide-react"
import { Github } from "lucide-react"

const projects=[
    {
        id:1,
        title:'Porfolio',
        technologies:['Html','CSS','JS'],
        demoLink:'#',
        repoLink:'#',
        image:img1,
    },
    {
        id:2,
        title:'Porfolio',
        technologies:['React','Tailwind CSS'],
        demoLink:'#',
        repoLink:'#',
        image:img2,
    },
    {
        id:3,
        title:'Gestionnaire de tache',
        technologies:['React','Node.js','Tailwind CSS'],
        demoLink:'#',
        repoLink:'#',
        image:img3,

    }
];



export default function Projects() {
  return (
    <div className="mt-10" id="Mesprojets">
      <Title title="Mes Projets" /> {/* Assuming Title component renders the title */}
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (

          <div key={project.id}  className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"> {/* Add a unique key for each project */}
            {/* Project details or components can go here based on your project data */}
             <img src={project.image} alt={project.name} /> {/* Assuming image and name properties exist */}
             <div>
               <h1 className="my-2 font-bold">{project.title}</h1>     {/* Assuming title property exists */}
             </div>
            
             <div className="flex flex-wrap gap-2 my-3">
               {project.technologies.map((tech) => (
                // eslint-disable-next-line react/jsx-key
                <span className="badge badge-secondary w-2/3">{tech}</span>
                ))}
             </div>

             <div className="flex">
                <a className="btn btn-neutral" href={project.demoLink}>Demo
                <Video className="w-4" />
                </a>

                <a className="btn btn-secondary ml-2" href={project.repoLink}>Github
                <Github className="w-5" />
               
                </a>
               
                

             </div>

           </div>
        ))}
      </div>
    </div>
  );
}


/* eslint-disable react/jsx-no-duplicate-props */
import Title from "./Title"

import img1 from "../assets/projects/projet1.png"
import img2 from "../assets/projects/projet2.png"
import img3 from "../assets/projects/1.png"
import img4 from "../assets/projects/projet3.png"
import img5 from "../assets/projects/projet4.png"

import { Video } from "lucide-react"
import { Github } from "lucide-react"

const projects=[
   {
        id:1,
        title:'Site E-commerce cosmetiques',
        description:'MERN Stack',
        technologies:['React','Node.js','Express.js','CSS','MongoDB'],
        demoLink:'https://ecommerce1-frontend-iw62.onrender.com/',
        repoLink:'https://github.com/Solange883/Ecommerce1.git',
        image:img3,

    },
    {
      id:2,
      title:'Plateforme de gestion dévénements',
      description:'',
      technologies:['Angular','Laravel','Mysql','Bootstrap'],
      demoLink:'',
      repoLink:'https://github.com/Solange883/EventManager.git',
      image:img5,

  },
    {
      id:3,
      title:"Logiciel pour la gestion des donnees et deliberation des candidats pour l'examen du BFEM au Senegal ",
      description:'POO',
      technologies:['Python','Tkinter','SQLite'],
      demoLink:'',
      repoLink:'https://github.com/Solange883/Projetpython.git',
      image:img4,
  },
    {
        id:4,
        title:'Porfolio',
        description:'',
        technologies:['Html','CSS','JavaScript'],
        demoLink:'#',
        repoLink:'https://github.com/Solange883/Portfolio.git',
        image:img1,
    },
    {
        id:4,
        title:'Porfolio',
        description:'',
        technologies:['React','TailwindCSS'],
        demoLink:'#',
        repoLink:'https://github.com/Solange883/Portfolio2.git',
        image:img2,
    },
   
];



export default function Projects() {
  return (
    <div className="mt-10" id="Mesprojets">
      <Title title="Mes Projets" /> {/* Assuming Title component renders the title */}
      <div className="grid md:grid-cols-3 w-200 grid-cols-2 gap-2">
        {projects.map((project) => (

          <div key={project.id}  className="bg-base-300 p-5  h-fit rounded-xl shadow-lg"> {/* Add a unique key for each project */}
            {/* Project details or components can go here based on your project data */}
             <img src={project.image} alt={project.name} /> {/* Assuming image and name properties exist */}
             <div>
               <h1 className="my-2 font-bold">{project.title}</h1>     {/* Assuming title property exists */}
             </div>
             <p className="text-sm">{project.description}</p>
            
             <div className="grid grid-cols-2 gap-2 my-2  mr-5 ">
               {project.technologies.map((tech) => (
                // eslint-disable-next-line react/jsx-key
                <span className="badge badge-secondary w-50 ">{tech}</span>
                ))}
             </div>

             <div className="flex md:gap-4 gap-1">
                <a className=" btn btn-neutral  " href={project.demoLink}>Demo
                <Video className="w-3 " />
                </a>

                <a className="btn btn-secondary " href={project.repoLink}>Github
                <Github className="w-4" />
               
                </a>
               
                

             </div>

           </div>
        ))}
      </div>
    </div>
  );
}


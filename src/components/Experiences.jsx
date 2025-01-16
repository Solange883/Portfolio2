import Title from "./Title";

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgC from "../assets/techno/c.png";
import imgANGULAR from "../assets/techno/angular.png";
import imgBOOTSTRAP from "../assets/techno/bootstrap.jpg";
import imgFLUTTER from "../assets/techno/flutter.jpg";
import imgJAVA from "../assets/techno/java.svg";
import imgLARAVEL from "../assets/techno/laravel.svg";
import imgMONGODB from "../assets/techno/mongodb.svg";
import imgPHP from "../assets/techno/php.svg";
import imgPYTHON from "../assets/techno/python.png";
import imgREACT from "../assets/techno/react.png";
import imgSQL from "../assets/techno/sql.svg";
import imgSQL1 from "../assets/techno/sql1.png";
import imgTAILWINDCSS from "../assets/techno/tailwind.png";



const skills=[
    {id:1,name:"HTML",image:imgHTML},
    {id:2,name:"CSS",image:imgCSS},
    {id:3,name:"JS",image:imgJS},
    {id:4,name:"C",image:imgC},
    {id:5,name:"ANGULAR",image:imgANGULAR},
    {id:6,name:"BOOTSTRAP",image:imgBOOTSTRAP},
    {id:7,name:"FLUTTER",image:imgFLUTTER},
    {id:8,name:"JAVA",image:imgJAVA},
    {id:9,name:"LARAVEL",image:imgLARAVEL},
    {id:10,name:"MONGODB",image:imgMONGODB},
    {id:11,name:"PHP",image:imgPHP},
    {id:12,name:"PYTHON",image:imgPYTHON},
    {id:13,name:"REACT",image:imgREACT},
    {id:14,name:"SQL",image:imgSQL},
    {id:15,name:"SQL1",image:imgSQL1},
    {id:16,name:"TAILWINDCSS",image:imgTAILWINDCSS},
  
];


export default function Experiences() {
  return (
    <div id="Competences">
        <Title title="Mes compétences"/>
        <div>
            <div className="flex flex-wrap gap-4 justify-center items-center  mt-4 md:mt-0">
                {skills.map((skill) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={skill.id} className="flex justify-center items-center flex-col">
                        <div className="w-24 h-24 p-2 rounded-full border-2 border-secondary">
                            <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full"/>
                        </div>
                        <span className="mt-2 text-sm">{skill.name}</span>
                    </div>
                ))}
              
            </div>
            
        </div>
    </div>

  )
}
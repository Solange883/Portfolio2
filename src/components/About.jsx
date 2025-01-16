import Title from "./Title"
import img from '../assets/profil1.png'

export default function About() {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="Apropos">
        <Title title="A propos"/>
        <div className="md:h-screen flex justify-center">
            <div className="hidden md:block">
                 <img src={img} alt="" className=" w-97  object-cover
                            rounded-xl"/>
            </div>

            <div className="md:ml-10 " >
              <p className="text-center md:text-left">Etudiante en Licence informatique option génie logiciel , je suis à la recherche d’un stage,
               pour mettre en pratique mes connaissances et développer mes compétences dans ce
               domaine. Je suis rigoureuse, organisée et capable de travailler de manière autonome et en
               équipe. Je suis convaincue que l’informatique a le potentiel de changer le monde, et je
               souhaite contribuer à ce changement.
              </p>
            </div> 

        </div>
    </div>
  )
}

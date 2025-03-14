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
              <p className="text-center md:text-left">Récemment diplômée en Licence informatique, option génie logiciel, je suis à la recherche d’un stage pour appliquer mes compétences et approfondir mes connaissances dans ce domaine. Passionnée, rigoureuse et organisée, je suis prête à relever des défis en travaillant aussi bien de manière autonome qu'en équipe. Convaincue que l'informatique peut transformer le monde, je souhaite participer activement à cette évolution.
              </p>
            </div> 

        </div>
    </div>
  )
}

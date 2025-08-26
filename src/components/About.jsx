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
              <p className="text-center md:text-left">Jeune diplômée en informatique, passionnée par le développement web, je maîtrise les technologies modernes du front-end et du back-end. Curieuse, motivée et désireuse d’acquérir une première expérience professionnelle, je suis prête à contribuer à des projets concrets tout en continuant à apprendre et à progresser.
              </p>
            </div> 

        </div>
    </div>
  )
}

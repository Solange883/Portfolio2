import { Mail } from "lucide-react"
import img from '../assets/profil1.png'

import { Download } from "lucide-react"


export default function Home() {

  
  return (
    <div className="flex flex-col-reverse 
    md:flex-row justify-center items-center md:my-32 my-16 " id="Accueil">

        <div className="flex flex-col justify-end md:justify-start"> 
            <h1 className="text-2xl md:text-5xl font-bold text-center md:text-left md:ml-5 mt-4 ml-3 md:mt-0 whitespace-nowrap  md:whitespace-nowrap">Bonjour,<br /> je suis {" "}
            <span className="text-secondary ">Marie Solange Diouf</span>
            </h1>

            <p className="my-4 text-xl text-center md:text-left md:ml-5 ">Développeuse Full Stack</p>

           <div className="flex flew-row justify-center md:justify-start md:ml-6">
            <a href="mailto:soldesanges88@gmail.com" className="my-5 btn btn-secondary md:w-fit ">
             <Mail className="w-5 h-5" />
             Contactez-moi
            </a>
            <a href="/Portfolio2/CV/CV_MARIE_SOLANGE_DIOU.pdf" className="my-5 btn btn-secondary md:w-fit ml-3 ">
             <Download  className="w-5 h-5"/>
             Téléchargez CV
            </a>
           </div>


        </div>
     
        <div className="md:ml-40">
            <img src={img} alt="" className=" w-96 h-110 object-cover
            boder-8 border-secondary shadow-xl"
            style={{
                borderRadius:"30% 70% 70% 30% / 67% 62% 38% 33%"
            }}
            />
           
        </div>

    </div>
  )
}

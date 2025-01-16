import { Container } from "lucide-react"

export default function Navbar() {
  return (
    <div className="flex justify-center md:justify-between items-center p-4 ">
        <a href="#" className="flex items-center font-bold text-3xl md:text-xl ">
        <Container className="mr-2" />
        Solange<span className="text-secondary">Dev</span>
        </a>
        
        <ul className="hidden md:flex space-x-4">
            <li>
                <a href="#Accueil" className="btn btn-sm btn-ghost">Accueil</a>
            </li>
            <li>
                <a href="#Apropos" className="btn btn-sm btn-ghost">A propos</a>
            </li>
            <li>
                <a href="#Competences" className="btn btn-sm btn-ghost">Mes compétences</a>
            </li> <li>
                <a href="#Mesprojets" className="btn btn-sm btn-ghost">Mes projets</a>
            </li>

        </ul>
        
    </div>
  )
}



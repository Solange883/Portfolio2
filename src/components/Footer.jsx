import { Container} from "lucide-react"
import { Github } from "lucide-react"
import { Instagram } from "lucide-react"
import { Twitter } from "lucide-react"
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10 ">
    <aside>
    <Container  className="w-10 h-10"/>
      <p className="font-bold">
        Solange
        <span className="text-secondary">DEV</span>
       
      </p>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
    <nav>
      <div className="grid grid-flow-col gap-4">
        <a href="https://github.com/Solange883"><Github className="w-6 h-6 text-current" /></a>
        <a href="https://www.linkedin.com/in/solange-diouf/"><Linkedin className="w-6 h-6 text-current" /></a>
        <a href="https://x.com/diouf_solange?s=21"><Twitter className="w-6 h-6 text-current" /></a>
        <a href="https://www.instagram.com/soldes_anges88?igsh=MXJneWdrcDd4aHJtMw%3D%3D&utm_source=qr"><Instagram className="w-6 h-6 text-current" /></a>
      </div>
    </nav>
  </footer>
  )
}

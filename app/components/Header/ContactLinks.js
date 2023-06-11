import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'


export default function ContactLinks() {
  return (
    <div className="p-10">
      <nav className="rounded border-2 flex flex-row bg-[#a1b1a4]">
        <a href='https://github.com/ianfshirley' target='_blank' rel='noopener noreferrer' className="p-2">
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
        <a href='https://www.linkedin.com/in/ianfshirley/' target='_blank' rel='noopener noreferrer' className="p-2">
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </a>
        <a href='mailto:ianfshirley88@gmail.com' target='_blank' rel='noopener noreferrer' className="p-2">
          <FontAwesomeIcon icon={faEnvelopeSolid} className="w-5 h-5" />
        </a>
      </nav>
    </div>
  )
}
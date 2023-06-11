import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'


export default function ContactLinks() {
  return (
    <div className="fixed bottom-0 left-0 mx-4">
      <nav className="flex flex-col text-mist">
        <a href='https://github.com/ianfshirley' target='_blank' rel='noopener noreferrer' className="p-2">
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
        <a href='https://www.linkedin.com/in/ianfshirley/' target='_blank' rel='noopener noreferrer' className="p-2">
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </a>
        <a href='mailto:ianfshirley88@gmail.com' target='_blank' rel='noopener noreferrer' className="p-2">
          <FontAwesomeIcon icon={faEnvelopeSolid} className="w-5 h-5" />
        </a>
        <div className="h-32 w-1 bg-mist mt-4 mx-auto"></div>
      </nav>
    </div>
  )
}
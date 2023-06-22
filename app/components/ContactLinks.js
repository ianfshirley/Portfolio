'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function ContactLinks() {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="fixed bottom-0 left-0 md:ml-4 md:mr-8 mt-20">
      <nav
        className="flex flex-col"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href='https://github.com/ianfshirley'
          target='_blank'
          rel='noopener noreferrer'
          className="p-2 text-mist-50 hover:text-peach-500 hover:pb-3 hover:pt-1"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5"
          />
        </a>
        <a
          href='https://www.linkedin.com/in/ianfshirley/'
          target='_blank'
          rel='noopener noreferrer'
          className="p-2 text-mist-50 hover:text-peach-500 hover:pb-3 hover:pt-1"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-5 h-5"
          />
        </a>
        <a
          href='mailto:ianfshirley88@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className="p-2 text-mist-50 hover:text-peach-500 hover:pb-3 hover:pt-1"
        >
          <FontAwesomeIcon
            icon={faEnvelopeSolid}
            className="w-5 h-5"
          />
        </a>
        <div className={`h-32 w-1 bg-mist-50 mt-4 mx-auto ${isHovered ? 'bg-peach-500' : ''}`}>
        </div>
      </nav>
    </div>
  )
}
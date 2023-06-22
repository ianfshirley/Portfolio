'use client'
import { useState } from 'react';


export default function Resume() {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="fixed bottom-0 right-0 mx-2 md:mr-4 md:ml-8 mt-20">
      <nav
        className="flex flex-col"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >

        <a 
          href='/resume/Ian_F_Shirley_Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className="w-9 inline-flex text-mist-50 hover:text-peach-500 transform rotate-90 p-2 hover:pr-3 hover:pl-1"
        >
          resume
        </a>


        <div className={`h-36 w-1 bg-mist-50 mt-12 mx-auto ${isHovered ? 'bg-peach-500' : ''}`}></div>
      </nav>
    </div>
  )
}
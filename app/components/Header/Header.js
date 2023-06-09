"use client"
import NavBar from "./NavBar"
import { useState, useEffect } from 'react';
import { cinzel, orbitron } from 'app/fonts.js'



function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]); // run when scroll direction changes

    return scrollDirection;
};


export default function Header() {

  const scrollDirection = useScrollDirection();

  return (
    <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} z-20 h-24 w-screen flex flex-row justify-between transition-all duration-500 bg-[#191919]`}>
      <h1 className='pl-4 sm:pl-10 pt-10 text-peach-500 text-xl sm:text-3xl font-semibold'>
        Ian F. Shirley
      </h1>
      <NavBar />
    </div>
  )
}


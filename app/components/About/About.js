import Image from "next/image"
import profilePic from 'public/img/me.jpg'


export default function About() {
  return (
    <div id='about' className="m-8 md:m-24 flex flex-col md:flex-row justify-center items-center">
      <div className="mask mask-hexagon max-w-xs md:max-w-md bg-gradient-to-br from-peach-500 to-peach-300 z-10 sm:-mr-8">
        <Image
          src={profilePic}
          alt='A picture of Ian'
          className="rounded-full z-20 p-10"
        />
      </div>
      <div className="flex flex-col justify-center z-0">
        <h5 className="text-army text-2xl pl-5 pr-5 pb-5 sm:pt-5 text-center">a little about me</h5>
        <p className="pl-10 sm:pl-20 mx-4 pr-10 py-5 sm:-ml-10 text-justify max-w-2xl  rounded-r-lg text-mist-50 bg-army rounded-2xl">
          I'm a full-stack software developer, I love creating clean and efficient backends and then designing and creating beautiful and user-friendly UIs. I have a history in sales and fraud investigation which contributed to these skills etc. Add some stuff from professional pitch about my soft skills and reason for becoming software developer. Then a little fun stuff: personal history, work experience, hobbies n stuff.
        </p>
      </div>
    </div>
  )
}
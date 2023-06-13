import Image from "next/image"
import profilePic from 'public/img/me.jpg'


export default function About() {
  return (
    <div className="m-8 md:m-24 flex flex-col md:flex-row justify-center items-center">
      <div className="mask mask-parallelogram max-w-xs md:max-w-md bg-gradient-to-br from-peach-500 to-peach z-0">
        <Image
          src={profilePic}
          alt='A picture of Ian'
          className="rounded-full z-10 p-16"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h5 className="text-army text-2xl p-5 text-center">a little about me</h5>
        <p className="pl-20 pr-10 pt-5 pb-10 -ml-10 text-justify max-w-2xl  rounded-r-lg text-mist-50">
          I'm a full-stack software developer, I love creating clean and efficient backends and then designing and creating beautiful and user-friendly UIs. I have a history in sales and fraud investigation which contributed to these skills etc. Add some stuff from professional pitch about my soft skills and reason for becoming software developer. Then a little fun stuff: personal history, work experience, hobbies n stuff.
        </p>
      </div>
    </div>
  )
}
import Image from "next/image"
import Skills from "./Skills"


export default function Hero() {
  return (
    <div className="mt-12 sm:mt-24 mb-24 md:mx-10">
      <div className="flex flex-col md:flex-row justify-evenly items-center mx-10">
        <div className=" md:mx-10">
          <h1 className="mb-1 text-2xl font-bold leading-tight text-peach-500 sm:text-xl">Hey there,</h1>
          <h2 className="mb-2 text-5xl font-bold leading-tight text-mist-50 sm:text-7xl">My name's Ian.</h2>
          <h3 className=" text-2xl font-medium text-army sm:text-5xl">Full-Stack Developer</h3>
          <h5 className="mb-3 text-lg font-medium text-army sm:text-2xl">
            & UI Designer
          </h5>
          {/* <p className="max-w-md mt-5 mb-5 text-lg text-peach sm:text-xl "></p> */}
        </div>
        <Skills />
      </div>
    </div>
  )
}
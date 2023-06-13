import Image from "next/image"
import Skills from "./Skills"


export default function Hero() {
  return (
    <div className="mt-12  md:mx-10">
      <div className="flex flex-col md:flex-row justify-evenly items-center mx-10">
        <div className=" md:mx-10">
          <h1 className="mb-1 text-2xl font-bold leading-tight text-peach-500 sm:text-xl">Hi, my name is</h1>
          <h2 className="mb-2 text-5xl font-bold leading-tight text-mist-50 sm:text-7xl">Ian F. Shirley</h2>
          <h3 className="mb-3 text-2xl font-medium text-army sm:text-5xl">Headline goes here</h3>
          <p className="max-w-md mt-5 mb-5 text-lg text-mist sm:text-xl text-justify">Summary goes here. Some stuff about what I'm doing, what I excel at and/or what I like. Bla bla lorem impsum whatever bs they always have in these things</p>
        </div>
        <Skills />
      </div>
    </div>
  )
}
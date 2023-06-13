import Image from "next/image"
import Skills from "./Skills"


export default function Hero() {
  return (
    <div className="mt-24 mx-10">
      <div className="flex flex-row justify-evenly mx-10">
        <div className="justify-center mx-10 sm:pr-6">
          <h1 className="mb-1 text-2xl font-bold leading-tight text-peach-500 sm:text-xl">Hi, my name is</h1>
          <h2 className="mb-2 text-5xl font-bold leading-tight text-mist-50 sm:text-7xl">Ian F. Shirley</h2>
          <h3 className="mb-3 text-2xl font-medium text-army sm:text-5xl">Headline goes here</h3>
          <p className="max-w-md mt-5 mb-1 text-lg text-mist sm:text-xl">Summary goes here. Some stuff about what I'm doing, what I excel at and/or what I like. Bla bla lorem impsum whatever bs they always have in these things</p>
        </div>
        <div className="w-[400px] bg-army rounded-xl">
          <Image
            src='/img/me.jpg'
            alt='Profile Pic'
            width={400}
            height={500}
            className='p-4 rounded-full'
          />
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  )
}
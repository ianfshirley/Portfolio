import Image from "next/image"
import profilePic from 'public/img/me.jpg'


export default function About() {
  return (
    <div
      id='about'
      className="m-8 md:m-24 flex flex-col md:flex-row justify-center items-center"
    >
      <div className="mask mask-hexagon max-w-xs md:max-w-md bg-gradient-to-br from-peach-500 to-peach-300 z-10 sm:-mr-8 mt-10">
        <Image
          src={profilePic}
          alt='A picture of Ian'
          className="rounded-full z-20 p-10"
        />
      </div>
      <div className="flex flex-col justify-center z-0">
        <h5 className="text-army text-2xl pl-5 pr-5 pb-5 sm:pt-5 text-center">
          a little about me
        </h5>
        <div className="px-6 sm:px-10 mx-4  py-5 sm:-ml-2 text-justify max-w-2xl  rounded-r-lg text-mist-50 bg-army rounded-2xl">
          <p className="py-2">
            I&apos;m a full-stack software developer with a background in sales, customer service, and fraud investigation. I&apos;m currently living in Seattle with my wife, our goldendoodle and our snowshoe cat (their names are Ramen & Sushi).
          </p>
          <p className="py-2">
            As someone who not only loves building and fixing things, but also someone who is obsessed with finding answers to the questions “how” and “why”, being a software developer is a perfect fit for me. I disagree with the phrase “if it ain&apos;t broke, don&apos;t try to fix it”, because I think there&apos;s usually a way to improve on something even if it&apos;s already working. In short, I like to find ways to maximize efficiency.
          </p>
          <p className="py-2">
            I am proudly neurodivergent. In my free time, I love to play sports, make art, cook and make things out of wood.    🏔️ 🛹 🏂 🚴 🏍️ 🥏 🧑‍🍳 🎨 🏀 🏕️
          </p>
        </div>
      </div>
    </div>
  )
}
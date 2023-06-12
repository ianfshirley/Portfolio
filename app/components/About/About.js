import Image from "next/image"


export default function About() {
  return (
    <div className="m-24 text-center border-2 border-peach ">
      <h1 className="text-mist text-2xl p-5">A little about me.</h1>
      <div className="flex flex-row justify-center items-center p-10">
        <div className="w-auto bg-gradient-to-br from-peach-500 to-peach rounded-3xl flex justify-center">
          <Image
            src='/img/me.jpg'
            alt='Me'
            width={300}
            height={300}
            className="p-2 rounded-full"
          />
        </div>
        <p className="pl-10 pr-5 py-10 text-justify max-w-2xl bg-army rounded-r-lg">
          I'm a full-stack software developer, I love creating clean and efficient backends and then designing and creating beautiful and user-friendly UIs. I have a history in sales and fraud investigation which contributed to these skills etc. Add some stuff from professional pitch about my soft skills and reason for becoming software developer. Then a little fun stuff: personal history, work experience, hobbies n stuff.
        </p>
      </div>
    </div>
  )
}
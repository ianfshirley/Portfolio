import Image from "next/image"
import profilePic from 'public/img/me.jpg'


export default function About() {
  return (
    <div className="m-8 md:m-24 flex flex-col md:flex-row justify-center items-center">

      <div className="max-w-sm md:max-w-md">
        <Image
          src={profilePic}
          alt='A picture of Ian'
          className="rounded-md shadow md:shadow-xl shadow-peach"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h5 className="text-army text-2xl p-5 text-center">a little about me</h5>
        <p className="pl-20 pr-10 pt-5 pb-10 -ml-10 text-justify max-w-2xl  rounded-r-lg text-mist-50">
          I'm a full-stack software developer, I love creating clean and efficient backends and then designing and creating beautiful and user-friendly UIs. I have a history in sales and fraud investigation which contributed to these skills etc. Add some stuff from professional pitch about my soft skills and reason for becoming software developer. Then a little fun stuff: personal history, work experience, hobbies n stuff.
        </p>
      </div>

      {/* <h1 className="text-mist text-2xl p-5">A little about me.</h1>
      <div className="flex flex-row justify-center items-center p-10">
        <div className="w-96 h-96 bg-gradient-to-br from-peach-500 to-peach rounded-lg relative">
          <Image
            src='/img/me.jpg'
            alt='Me'
            width={300}
            height={300}
            className="p-4"
            // style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <p className="pl-20 pr-10 py-10 -ml-10 text-justify max-w-2xl bg-army rounded-r-lg">
          I'm a full-stack software developer, I love creating clean and efficient backends and then designing and creating beautiful and user-friendly UIs. I have a history in sales and fraud investigation which contributed to these skills etc. Add some stuff from professional pitch about my soft skills and reason for becoming software developer. Then a little fun stuff: personal history, work experience, hobbies n stuff.
        </p>
      </div> */}


    </div>
  )
}
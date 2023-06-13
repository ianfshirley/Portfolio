import Image from "next/image"


export default function About() {
  return (
    <div className="m-24 text-center ">

      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
            src='/img/me.jpg'
            alt='Me'
            width={400}
            height={400}
            className="object-cover h-full rounded-t-lg    md:rounded-none md:rounded-l-lg"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A little about me.</h1>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          I'm a full-stack software developer, I love creating clean and efficient backends and then designing and creating beautiful and user-friendly UIs. I have a history in sales and fraud investigation which contributed to these skills etc. Add some stuff from professional pitch about my soft skills and reason for becoming software developer. Then a little fun stuff: personal history, work experience, hobbies n stuff.
          </p>
        </div>
      </div>

      {/* <h1 className="text-mist text-2xl p-5">A little about me.</h1>
      <div className="flex flex-row justify-center items-center p-10">
        <div className="w-96 h-96 bg-gradient-to-br from-peach-500 to-peach rounded-lg relative">
          <Image
            src='/img/me.jpg'
            alt='Me'
            fill={true}
            className=""
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
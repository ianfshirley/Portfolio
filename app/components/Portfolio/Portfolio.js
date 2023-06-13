import Image from "next/image"



export default function Portfolio() {
  return (
    <div className="bg-fog m-8 md:m-24 flex flex-col md:flex-row justify-center items-center">
      <h1
        className='p-10'
      >Projects</h1>
      {/* -make a grid layout for the projects (or flex wrap)
          -just a gif, the title, and the skill icons
          -when you click on one, it opens a carousel with a description of the project and links to the github repo(s) and live site */}
      <div className="flex flex-wrap justify-evenly bg-fog rounded-xl">
          <div className="flex flex-col items-center p-4">
            <Image
              src='/img/placeholder_square.png'
              alt='skill placeholder'
              width={100}
              height={100}
            />
            <p>Project Info</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <Image
              src='/img/placeholder_square.png'
              alt='skill placeholder'
              width={100}
              height={100}
            />
            <p>Project Info</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <Image
              src='/img/placeholder_square.png'
              alt='skill placeholder'
              width={100}
              height={100}
            />
            <p>Project Info</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <Image
              src='/img/placeholder_square.png'
              alt='skill placeholder'
              width={100}
              height={100}
            />
            <p>Project Info</p>
          </div>
        </div>
    </div>
  )
}


export default function Portfolio() {
  return (
    <main id='portfolio' className="m-20 bg-fog flex justify-center">
      <h1
        className='p-10'
      >Portfolio Page</h1>
      {/* -make a grid layout for the projects (or flex wrap)
          -just a gif, the title, and the skill icons
          -when you click on one, it opens a carousel with a description of the project and links to the github repo(s) and live site */}
      <div className="m-10 bg-mist h-[500px] w-[500px]"></div>
    </main>
  )
}
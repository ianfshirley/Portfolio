import Image from "next/image"

// add urls (live site & github repo), year, create gif, and finish adding icons
const projects = [
  {
    "title": "JobHuntHQ",
    "images": [
      "/img/JobHuntHQ.gif",
      "/img/JobHuntHQ-landing-page.png",
    ],
    "summary": "Helps users keep track of their job search.",
    "description": "",
    "skills": [
      {
        "class": "devicon-python-plain",
        "name": "Python"
      },
      {
        "class": "devicon-django-plain",
        "name": "Django"
      },
      {
        "class": "devicon-nextjs-original",
        "name": "Next.js"
      },
      {
        "class": "devicon-tailwindcss-plain",
        "name": "Tailwind CSS"
      },
    ]
  },
  {
    "title": "Target Practice",
    "images": [
      "/img/target-practice-home.png",
    ],
    "summary": "A retro computer game.",
    "description": "",
    "skills": [
      {
        "class": "devicon-javascript-plain",
        "name": "JavaScript"
      },
      {
        "class": "devicon-html5-plain",
        "name": "HTML"
      },
      {
        "class": "devicon-css3-plain",
        "name": "CSS"
      },
    ]
  },
]




export default function Portfolio() {



  return (
    <div id='portfolio' className="mt-12 mb-8 mx-8 md:mx-24 flex flex-col justify-center items-center">
      {/* -make a grid layout for the projects (or flex wrap)
          -just a gif, the title, and the skill icons
          -when you click on one, it opens a carousel with a description of the project and links to the github repo(s) and live site */}

      <div>
        <h1
          className='p-10 text-fog text-5xl text-shadow-sm shadow-mist-50'
        >Projects</h1>
      </div>

      <div className=" bg-fog flex flex-col justify-center items-center md:flex-row rounded-lg shadow-lg shadow-army">

        {projects.map((project) => (

          <div key={project} className="flex flex-col max-w-sm bg-mist border-2 border-fog-400 rounded-lg shadow-md shadow-fog m-6 text-[#191919]">
            <a href="#">
              <img className="rounded-t-lg" src={project.images[0]} alt={`Screenshot of ${project.title}`} />
            </a>
            <div className="p-5 flex items-center flex-col">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">{project.title}</h5>
              </a>
              <p className="mb-3 font-normal">{project.summary}</p>
            </div>
          </div>

        ))}

      </div>

    </div>
  )
}



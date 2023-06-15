import Image from "next/image"

// add urls (live site & github repo), year, create gif, and finish adding icons
const projects = [
  {
    "title": "JobHuntHQ",
    "image": "/img/JobHuntHQ-landing-page.png",
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
    "image": "/img/target-practice-home.png",
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
  {
    "title": "5 O'Clock Somewhere",
    "image": "/img/1024px-Tiki-Cocktails.jpg",
    "skills": [
      {
        "class": "devicon-javascript-plain",
        "name": "JavaScript"
      },
      {
        "class": "devicon-react-plain",
        "name": "React"
      },
      {
        "class": "devicon-bootstrap-plain",
        "name": "bootstrap"
      },
    ]
  },
]


export default function Portfolio() {



  return (
    <div  className=" m-8 md:m-24 flex flex-col justify-center items-center">
      {/* -make a grid layout for the projects (or flex wrap)
          -just a gif, the title, and the skill icons
          -when you click on one, it opens a carousel with a description of the project and links to the github repo(s) and live site */}

      <div>
        <h1
          className='p-10 text-fog text-5xl text-shadow-sm shadow-peach'
        >Projects</h1>
      </div>

      <div className=" bg-fog flex flex-col justify-center items-center md:flex-row rounded-lg shadow-lg shadow-army">

        {projects.map((project) => (

          <div key={project} className="flex flex-col max-w-sm bg-mist border-2 border-fog-400 rounded-lg shadow-md shadow-fog m-6 text-[#191919]">
            <a href="#">
              <img className="rounded-t-lg" src={project.image} alt={`Screenshot of ${project.title}`} />
            </a>
            <div className="p-5 flex items-center flex-col">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">{project.title}</h5>
              </a>
              <p className="mb-3 font-normal">Brief project description.</p>
            </div>
          </div>

        ))}

      </div>

    </div>
  )
}
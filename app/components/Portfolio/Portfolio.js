import Image from "next/image"

// add urls (live site & github repo), year, create gif, and finish adding icons
const projects = [
  {
    "title": "JobHuntHQ",
    "images": [
      "/img/JobHuntHQ.gif",
      "/img/JobHuntHQ-landing-page.png",
    ],
    "description": "JobHuntHQ is a web application designed to help users organize and track their job search journey in a simple, efficient, and user-friendly manner. Users can add jobs they have applied for, and update as they move through the hiring process.",
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
    "description": "Target Practice is a retro computer game based on Nintendo's classic \"Duck Hunt\", where users try to shoot down birds that fly across the screen, and scores are tracked on the leaderboard.",
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
    <div  className="mt-12 mb-8 mr-8 ml-10 md:mx-24 flex flex-col justify-center items-center">

      <div>
        <h1
          className='p-10 text-fog text-5xl text-shadow-sm shadow-mist-50'
        >Projects</h1>
      </div>

      <div className=" bg-mist flex flex-col justify-center items-center md:flex-row rounded-lg">

        {projects.map((project) => (

          <div key={project} className="flex flex-col max-w-sm bg-fog  rounded-lg shadow-lg shadow-fog-400 m-6 text-[#191919]">
            <a href="#">
              <img className="rounded-t-lg" src={project.images[0]} alt={`Screenshot of ${project.title}`} />
            </a>
            <div className="p-5 flex items-center flex-col">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">{project.title}</h5>
              </a>
              <p className="mb-3 font-normal">{project.description}</p>
            </div>
          </div>

        ))}

      </div>

    </div>
  )
}



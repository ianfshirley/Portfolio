import Image from "next/image"

// add urls (live site & github repo), year, create gif, and finish adding icons
const projects = [
  {
    "title": "JobHuntHQ",
    "images": [
      "/img/JobHuntHQ.gif",
      "/img/JobHuntHQ-landing-page.png",
    ],
    "github": "https://github.com/ianfshirley/JobHuntHQ",
    "website": "https://job-hunt-hq.vercel.app/",
    "description": "JobHuntHQ is a web application designed to help users organize and track their job search journey in a simple, efficient, and user-friendly manner. Users can add jobs they have applied for, and update as they move through the hiring process.",
    "technologies": [
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
    "github": "https://github.com/CF201-Team-Black/target-practice",
    "website": "https://cf201-team-black.github.io/target-practice/",
    "description": "Target Practice is a retro computer game based on Nintendo's classic \"Duck Hunt\", where users try to shoot down birds that fly across the screen, and scores are tracked on the leaderboard.",
    "technologies": [
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
    <div className="mt-12 mb-8 mr-8 ml-10 md:mx-24 flex flex-col justify-center items-center">

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
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-center">{project.title}</h3>
              <div className="rounded-full bg-mist my-2 shadow-sm shadow-army flex flex-row items-center">
                <a href={project.github} target='_blank' rel='noopener noreferrer' className="p-2 font-medium text-army-700 hover:text-peach-500 hover:font-semibold">
                  GitHub
                </a>
                <p className="text-xl">|</p>
                <a href={project.website} target='_blank' rel='noopener noreferrer' className="p-2 font-medium text-army-700 hover:text-peach-500 hover:font-semibold">
                  Live Site
                </a>
              </div>
              <p className="mb-3 font-normal">{project.description}</p>
              <div className="flex flex-wrap justify-center px-6 pt-4 pb-2">
                {project.technologies.map((tech) => (
                  <span key={tech.name} className="inline-block px-4 py-4 mx-1 my-1 text-2xl font-semibold text-gray-800 bg-gray-200 rounded-full sm:text-4xl">
                    <div key={tech.name} className="flex flex-col items-center justify-center px-2 text-lg sm:text-xl">
                      <i className={`${tech.class} text-2xl sm:text-4xl`}></i>
                      <div className="justify-center">
                        <p className="mt-0 text-gray-800">{tech.name}</p>
                      </div>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>

        ))}

      </div>

    </div>
  )
}



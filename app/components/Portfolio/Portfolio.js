import Image from "next/image"


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
    ]
  },
]


export default function Portfolio() {



  return (
    <div className=" m-8 md:m-24 flex flex-col md:flex-row justify-center items-center">
      {/* -make a grid layout for the projects (or flex wrap)
          -just a gif, the title, and the skill icons
          -when you click on one, it opens a carousel with a description of the project and links to the github repo(s) and live site */}
      <h1
        className='p-10 text-army text-5xl'
      >some recent projects</h1>

      <div className="bg-fog ">
        {projects.map((project) => (
          <div key={project} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={project.image} alt="JobHuntHQ screenshot" /></figure>
            <div className="card-body text-center">
              <h2 className="card-title mx-auto">{project.title}</h2>
              <div className="project-skills justify-evenly">
                <div className="flex flex-wrap justify-center px-6 pt-4 pb-2">
                  {project.skills.map((skill) => (
                    <span key={skill.name} className="inline-block px-4 py-4 mx-1 my-1 text-2xl font-semibold text-gray-800 bg-gray-200 rounded-full sm:text-4xl">
                      <div key={skill.name} className="flex flex-col items-center justify-center px-2 text-lg sm:text-xl">
                        <i className={`${skill.class} text-2xl sm:text-4xl`}></i>
                        <div className="justify-center">
                          <p className="mt-0 text-gray-800">{skill.name}</p>
                        </div>
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="/img/JobHuntHQ-landing-page.png" alt="JobHuntHQ screenshot" /></figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Project Title</h2>
          <div className="project-skills justify-evenly">
            <ul>
              {skills.map()}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  )
}
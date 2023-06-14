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

  const { title, image, skills } = project;

  return (
    <div className=" m-8 md:m-24 flex flex-col md:flex-row justify-center items-center">
      {/* -make a grid layout for the projects (or flex wrap)
          -just a gif, the title, and the skill icons
          -when you click on one, it opens a carousel with a description of the project and links to the github repo(s) and live site */}
      <h1
        className='p-10 text-army text-5xl'
      >some recent projects</h1>
      
      <div className="bg-fog ">
          {projects.map((project, index) => (
            <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="JobHuntHQ screenshot" /></figure>
            <div className="card-body text-center">
              <h2 className="card-title mx-auto">{title}</h2>
              <div className="project-skills justify-evenly">
                <ul>
                  {skills.map()}
                </ul>
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
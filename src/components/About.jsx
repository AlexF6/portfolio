import htmlIcon from "../assets/html.svg"
import cssIcon from "../assets/css.svg"
import jsIcon from "../assets/javascript.svg"
import reactIcon from "../assets/react.svg"
import tailwindIcon from "../assets/tailwind.svg"
import railsIcon from "../assets/rails.svg"
import nodeIcon from "../assets/nodeJs.svg"
import mysqlIcon from "../assets/mysql.svg"
import postgreIcon from "../assets/postgre.svg"
import dockerIcon from "../assets/docker.svg"
import astroIcon from "../assets/astro.svg"
import gitIcon from "../assets/git.svg"
import githubIcon from "../assets/github.svg"
import vsIcon from "../assets/vscode.svg"
import npmIcon from "../assets/npm.svg"
import typeScriptIcon from "../assets/typescript.svg"
import python from "../assets/python.svg"
import angular from "../assets/angular.svg"


import { Briefcase } from "lucide-react";
import { Globe } from "lucide-react";
import { LibraryBig } from "lucide-react"

const About = () => {

  const experiences = [
    {
      year: "2025",
      title: "Front-End",
      company: "Abatech",
      role: "Front-end Developer"
    },
  ];

  return(
    <section id="about" className="py-20 px-6 lg:px-12 bg-gray-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="pl-2 grid lg:grid-cols-2 gap-12">

          {/* firstColumn */}
          <div className="flex flex-col w-auto h-auto sm:mx-auto lg:mx-0 gap-6">
            <div className="py-0 flex items-start justify-start">
              <h3 className="flex flex-row items-center gap-4 text-2xl font-semibold text-violet-400">
                <Briefcase/>
                Experience
              </h3>
            </div>

            <div className="pl-2">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-700"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-600 rounded-full"></div>
                  <div className="text-violet-400 text-sm font-medium mb-1">
                    {exp.year}
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                  <div className="text-gray-400 mb-2">{exp.company}</div>
                  <p className="text-gray-300">{exp.role}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="flex flex-row items-center gap-4 text-2xl font-semibold text-violet-400">
                <LibraryBig/>
                Education
              </h3>
            </div>

            <div className="pl-2">
                <div className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-600 rounded-full"></div>
                  <div className="text-violet-400 text-sm font-medium mb-1">2022 - 202X</div>
                  <h4 className="text-xl font-semibold mb-1">Technology in Software Development</h4>
                  <p className="text-gray-300">Instituto Tecnológico Metropolitano de Medellín</p>
                </div>
            </div>

          </div>
          
          {/* Second Column */}
          <div className="w-auto h-auto">
            <h3 className="top-0 flex sm:justify-center justify-normal flex-row items-center gap-4 text-2xl font-semibold text-violet-400 mb-8">
              <Globe/>
              Technologies
            </h3>
            <div className="grid sm:grid-cols-2  space-y-4">
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Frontend
                </h3>
                <br/>
                <div className="flex justify-center gap-5">
                  <div className="flex flex-col items-center">
                    <img src={htmlIcon} className="w-11 h-11" alt="htmlIcon" />
                    <p className="text-gray-300 font-medium">HTML</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={cssIcon} className="w-11 h-11" alt="cssIcon" />
                    <p className="text-gray-300 font-medium">CSS</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={jsIcon} className="w-11 h-11" alt="jsIcon" />
                    <p className="text-gray-300 font-medium">JavaScript</p>
                  </div>
                </div>

                <div className="flex justify-center gap-5 mt-5">
                  <div className="flex flex-col items-center">
                    <img src={reactIcon} className="w-11 h-11" alt="reactIcon" />
                    <p className="text-gray-300 font-medium">React</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={tailwindIcon} className="w-11 h-11" alt="tailwindIcon" />
                    <p className="text-gray-300 font-medium">Tailwind</p>
                  </div>
                </div>
              </div>
              {/* second */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Backend
                </h3>  

                <div className="flex items-center justify-center gap-5 mt-5">
                  <div className="flex flex-col items-center">
                    <img src={railsIcon} className="w-11 h-11" alt="railsIcon" />
                    <p className="text-gray-300 font-medium">Rails</p>
                  </div>

                  {/* Si quieres usar Node.js, descomenta */}
                  {/* 
                  <div className="flex flex-col items-center">
                    <img src={nodeIcon} className="w-11 h-11" alt="nodeIcon" />
                    <p className="text-gray-300 font-medium">Node.js</p>
                  </div>
                  */}

                  <div className="flex flex-col items-center">
                    <img src={mysqlIcon} className="w-11 h-11" alt="mysqlIcon" />
                    <p className="text-gray-300 font-medium">MySQL</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={postgreIcon} className="w-11 h-11" alt="postgreIcon" />
                    <p className="text-gray-300 font-medium">PostgreSQL</p>
                  </div>
                </div>             
              </div>
              {/* third */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Learning                
                </h3>

                <div className="flex items-center justify-center gap-5 mt-5">
                  <div className="flex flex-col items-center">
                    <img src={dockerIcon} className="w-11 h-11" alt="dockerIcon" />
                    <p className="text-gray-300 font-medium">Docker</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={angular} className="w-11 h-11" alt="angularIcon" />
                    <p className="text-gray-300 font-medium">Angular</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={python} className="w-11 h-11" alt="pythonIcon" />
                    <p className="text-gray-300 font-medium">Python</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5 mt-5">
                  <div className="flex flex-col items-center">
                    <img src={typeScriptIcon} className="w-11 h-11" alt="tsIcon" />
                    <p className="text-gray-300 font-medium">TypeScript</p>
                  </div>
                </div>
              </div>
              {/* fourth */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Tools
                </h3>

                <div className="flex items-center justify-center gap-5 mt-5">
                  <div className="flex flex-col items-center">
                    <img src={gitIcon} className="w-11 h-11" alt="gitIcon" />
                    <p className="text-gray-300 font-medium">Git</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={githubIcon} className="w-11 h-11" alt="githubIcon" />
                    <p className="text-gray-300 font-medium">GitHub</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={vsIcon} className="w-11 h-11" alt="vsIcon" />
                    <p className="text-gray-300 font-medium">VS Code</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5 mt-5">
                  <div className="flex flex-col items-center">
                    <img src={npmIcon} className="w-11 h-11" alt="npmIcon" />
                    <p className="text-gray-300 font-medium">npm</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
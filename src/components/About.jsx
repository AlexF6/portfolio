import htmlIcon from "../assets/html.webp"
import cssIcon from "../assets/css.webp"
import jsIcon from "../assets/js.webp"
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


import { Briefcase } from "lucide-react";
import { Globe } from "lucide-react";

const About = () => {
  return(
    <section id="about" className="py-20 px-6 lg:px-12 bg-gray-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="pl-2 grid lg:grid-cols-2 gap-12 items-center">

          {/* firstColumn */}
          <div className="w-auto h-auto sm:mx-auto lg:mx-0">
            <h3 className="flex flex-row items-center gap-4 text-2xl font-semibold text-violet-400 mb-8">
              <Briefcase/>
              Experience
            </h3>
            <div className="space-y-4 pl-2">
                <div className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-600 rounded-full"></div>
                  <div className="text-violet-400 text-sm font-medium mb-1">2025</div>
                  <h4 className="text-xl font-semibold mb-1">Front-End</h4>
                  <div className="text-gray-400 mb-2">Abatech</div>
                  <p className="text-gray-300">Front-end Developer</p>
                </div>
                <div className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-600 rounded-full"></div>
                  <div className="text-violet-400 text-sm font-medium mb-1">2025</div>
                  <h4 className="text-xl font-semibold mb-1">Front-End</h4>
                  <div className="text-gray-400 mb-2">Abatech</div>
                  <p className="text-gray-300">Front-end Developer</p>
                </div>
                <div className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-600 rounded-full"></div>
                  <div className="text-violet-400 text-sm font-medium mb-1">2025</div>
                  <h4 className="text-xl font-semibold mb-1">Front-End</h4>
                  <div className="text-gray-400 mb-2">Abatech</div>
                  <p className="text-gray-300">Front-end Developer</p>
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
              {/* first */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Frontend
                </h3>
                <br/>
                <div className="flex justify-center gap-5">
                  <img src={htmlIcon} className="w-11 h-11" alt="htmlIcon" />
                  <img src={cssIcon} className="w-11 h-11" alt="cssIcon" /> 
                  <img src={jsIcon} className="w-11 h-11" alt="jsIcon" /> 
                </div>
                <div className="flex justify-center gap-5 mt-5">
                  <img src={reactIcon} className="w-11 h-11" alt="" />
                  <img src={tailwindIcon} className="w-11 h-11" alt="" />
                </div>
              </div>
              {/* second */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Backend 
                </h3>  
                <div className="flex items-center justify-center gap-5 mt-5">
                  <img src={railsIcon} className="w-11 h-11" alt="" />
                  <img src={nodeIcon} className="w-11 h-11" alt="" />
                  <img src={mysqlIcon} className="w-11 h-11" alt="" />
                </div>             
                <div className="flex items-center justify-center gap-5 mt-5">
                  <img src={postgreIcon} className="w-11 h-11" alt="" />
                </div>

              </div>
              {/* third */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Learning                
                </h3>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <img src={dockerIcon} className="w-11 h-11" alt="" />
                  <img src={astroIcon} className="w-11 h-11" alt="" />
                  <img src={python} className="w-11 h-11" alt="" />

                </div>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <img src={typeScriptIcon} className="w-11 h-11" alt="" />
                </div>
              </div>
              {/* fourth */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Tools
                </h3>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <img src={gitIcon} className="w-11 h-11" alt="" />
                  <img src={githubIcon} className="w-11 h-11" alt="" />
                  <img src={vsIcon} className="w-11 h-11" alt="" />
                </div>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <img src={npmIcon} className="w-11 h-11" alt="" />
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
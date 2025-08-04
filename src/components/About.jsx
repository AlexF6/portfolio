import htmlIcon from "../assets/html.webp"
import cssIcon from "../assets/css.webp"
import jsIcon from "../assets/js.webp"
import reactIcon from "../assets/react.svg"
import tailwindIcon from "../assets/tailwind.webp"
import railsIcon from "../assets/rails.svg"

import { Briefcase } from "lucide-react";
import { Globe } from "lucide-react";

const About = () => {
  return(
    <section id="about" className="py-20 px-6 lg:px-52 bg-gray-950">
      <div className="max-w-6xl mx-auto w-full">
        <div className="pl-2 grid lg:grid-cols-2 gap-12 items-center">

          {/* firstColumn */}
          <div className="w-auto h-100">
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
            </div>
          </div>
          
          {/* Second Column */}
          <div className="w-auto h-100">
            <h3 className="top-0 flex justify-center flex-row items-center gap-4 text-2xl font-semibold text-violet-400 mb-8">
              <Globe/>
              Technologies
            </h3>
            <div className="grid grid-cols-2 space-y-4">
              {/* first */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Frontend
                </h3>
                <br/>
                <div className="flex justify-center gap-5">
                  <img src={htmlIcon} className="w-15 h-15" alt="htmlIcon" />
                  <img src={cssIcon} className="w-15 h-15" alt="cssIcon" /> 
                  <img src={jsIcon} className="w-15 h-15" alt="jsIcon" /> 
                </div>
                <div className="flex justify-center gap-5 mt-5">
                  <img src={reactIcon} className="w-20 h-15" alt="" />
                  <img src={tailwindIcon} className="w-20 h-15" alt="" />
                </div>
              </div>
              {/* second */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Backend 
                </h3>  
                <div className="flex justify-center gap-5 mt-5">
                  <img src={railsIcon} className="w-15 h-15" alt="" />
                </div>             

              </div>
              {/* third */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Learning                
                </h3>
              </div>
              {/* fouth */}
              <div>
                <h3 className="flex justify-center text-xl font-semibold text-violet-300">
                  Tools
                </h3>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
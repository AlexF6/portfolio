import { Card } from "./ui/card";
import rsvg from "../assets/react.svg"

const Projects = () => {
  return(
    <section id="projects" className="py-20 px-6 lg:px-12 bg-gray-850">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-violet-400">
            Featured Projects
          </h2>
          <p>
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card
            className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-violet-500 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img src={rsvg} className="h-[200px] w-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />

            </div>
          </Card>

        </div>

      </div>
    </section>
  );
}

export default Projects;
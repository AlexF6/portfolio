import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";
import rsvg from "../assets/react.svg";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "./ui/button";
import tailwind from "../assets/tailwind.svg"
import react from "../assets/react.svg"
import rails from "../assets/rails.svg"


import proy from "../assets/elysium.webp"
import drawing from "../assets/drawing.webp"
import proy1 from "../assets/proy1.webp"
import proy2 from "../assets/proy2.webp"

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-gray-850">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-violet-400">
            Featured Projects
          </h2>
          <p>A showcase of my recent work and creative solutions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="text-gray-200 bg-black/25 border-gray-900 overflow-hidden group hover:border-violet-500 transition-all duration-300 px-4 rounded-3xl">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={proy || "/placeholder.svg"} // If you want a fallback in /public
                alt="react"
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 border-2 border-gray-800"
              />
              <a
                href="https://pr-store.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir proyecto Paint en Render"
                className="absolute inset-0 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 left-4">
                <Badge className="bg-violet-600 text-white">Web app</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-xs text-gray-300 bg-gray-900/80 px-2 py-1 rounded">
                  2025
                </span>
              </div>
            </div>

            <CardContent className="p-6">
            <CardTitle className="text-xl mb-3">E-Commerce</CardTitle>
            <CardDescription className="text-gray-300 mb-4">
              A full-stack e-commerce application built with Ruby on Rails, featuring 
              native authentication, product management, and a responsive UI styled with Tailwind CSS.
            </CardDescription>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                <p className="text-red-200">Ruby on Rails</p>
                <img src={rails} className="w-3" alt="Ruby on Rails" />
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                <p className="text-blue-300">Tailwind</p>
                <img src={tailwind} className="w-3.5" alt="Tailwind CSS" />
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                <p className="text-gray-200">Authentication</p>
              </Badge>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 hover:bg-gray-400 bg-transparent"
              >
                <a
                  className="flex items-center"
                  href="https://github.com/AlexF6/pr-store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              <a
                className="flex items-center"
                href="https://pr-store.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 hover:bg-gray-400 bg-transparent"
                >
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Live Demo
                </Button>
              </a>
            </div>
          </CardContent>
          </Card>

          <Card className="text-gray-200 bg-black/25 border-gray-900 overflow-hidden group hover:border-violet-500 transition-all duration-300 px-4 rounded-3xl">

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={proy2 || "/placeholder.svg"} // If you want a fallback in /public
                alt="react"
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 border-2 border-white/90"
              />
              <a
                href="https://paint-nsr8.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir proyecto Paint en Render"
                className="absolute inset-0 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 left-4">
                <Badge className="bg-violet-600 text-white">Web app</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-xs text-gray-300 bg-gray-900/80 px-2 py-1 rounded">
                  2025
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              <CardTitle className="text-gray-200 text-xl mb-3">Paint Clone</CardTitle>
              <CardDescription className="text-gray-300 mb-4">
                A simple paint-style application built with React, Canvas API, and shadcn/ui components. 
                Users can draw, erase, and experiment with colors directly on the canvas.
              </CardDescription>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  <p className="text-purple-200">React</p>
                  <img src={react} className="w-3" alt="" />
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  <p className="text-blue-300">Tailwind</p>
                  <img src={tailwind} className="w-3.5" alt="" />
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  <p className="text-gray-300">shadcn/ui</p>
                </Badge>
              </div>

              <div className="flex space-x-4 text-gray-200">
                <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-400 bg-transparent">
                  <a className="flex items-center" href="https://github.com/AlexF6/paint-ref" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <a className="flex items-center" href="https://paint-nsr8.onrender.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-400 bg-transparent">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="text-gray-200 bg-gray-800 border-gray-700 overflow-hidden group hover:border-violet-500 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={rsvg || "/placeholder.svg"} // If you want a fallback in /public
                alt="react"
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-violet-600 text-white">Web app</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-xs text-gray-300 bg-gray-900/80 px-2 py-1 rounded">
                  2025
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              <CardTitle className="text-xl mb-3">E-Commerce</CardTitle>
              <CardDescription className="text-gray-300 mb-4">
                An e-commerce
              </CardDescription>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  React
                </Badge>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-700 bg-transparent">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-700 bg-transparent">
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

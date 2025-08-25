import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import reactImg from "../assets/react.svg"
import { Linkedin } from "lucide-react";


const Hero = () => {
  return(
    <section id="home" className="min-h-screen flex items-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-violet-400 text-lg font-medium tracking-wider uppercase">
                Software Developer
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, i'm{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
            <p className="mb-6 font-md text-gray-300 max-w-lg">
              I specialize in creating web applications with clean, efficient and modern code
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-violet-600 hover:bg-purple-700 transition-all duration-300">
                Contact me
                <ArrowUpRight/>
              </Button>
              <Button className="flex items-center bg-violet-600 hover:bg-purple-700 transition-all duration-300" size="lg">
                <Linkedin className="w-25"/>
                Linkedin
              </Button>
            </div>

          </div>

          <div className="relative">
            <div className="realtive z-10">
              <img src={reactImg} className="w-[300px] h-[400px]  "></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-purple-600/20 rounded-2xl transform rotate-6"></div>
            <div className="absolute top-4 -right-4 w-24 h-24 bg-violet-600/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600/10  rounded-full"></div>
          </div>

        </div>
      </div>
{/* Farming git activity */}
    </section>
  );
}

export default Hero;
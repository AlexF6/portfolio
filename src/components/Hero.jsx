import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import reactImg from "../assets/react.svg"
import linkedin from "../assets/linkedin.svg"
import { MailIcon } from "lucide-react";
import photo from "../assets/photo.webp"



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
            <a href="mailto:correo@correo.com">
              <Button
                size="lg"
                className="flex cursor-pointer items-center gap-2 bg-violet-600 hover:bg-purple-700 transition-all duration-300"
              >
                <MailIcon className="w-[15px]" />
                <p>Contact me</p>
              </Button>
            </a>

              <Button size="lg" className="flex cursor-pointer items-center gap-2 bg-violet-600 hover:bg-purple-700 transition-all duration-300">
                <img src={linkedin} className="w-[15px]" alt="" />
                <a href="https://co.linkedin.com/in/alexsander-gonz%C3%A1lez-farrayans-149a18267?trk=people-guest_people_search-card" target="_blank">
                  <p>
                    LinkedIn
                  </p>
                </a>
              </Button>
            </div>

          </div>

          <div className="relative w-[400px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-[#1D172F] rounded-2xl transform rotate-3 overflow-hidden z-10">
              <img
                src={photo}
                alt="photo"
                className="w-full h-150 object-cover"
              />
            </div>

            <div className="absolute top-4 -right-12 w-24 h-24 bg-violet-600/10 rounded-full z-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600/10 rounded-full z-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
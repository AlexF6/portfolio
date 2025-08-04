import { Link } from "react-router";

const Mobilenav = () => {
  return (
          <nav className="lg:hidden fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MJ</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#home" className="text-sm hover:text-violet-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm hover:text-violet-400 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm hover:text-violet-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:text-violet-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
  );
}

export default Mobilenav;
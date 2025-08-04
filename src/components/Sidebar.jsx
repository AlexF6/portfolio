import { Link } from "react-router";

const Sidebar = () => {
  return(
    <div className="h-full bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-gray-900 border-r border-gray-800 z-50 hidden lg:flex flex-col items-center py-8">
        <div className="mb-8">
          <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">MJ</span>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
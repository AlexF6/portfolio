import useActiveSection from "./useActiveSection";
const IDS = ["home", "about", "projects"];

export default function Mobilenav() {
  const { active, handleAnchorClick } = useActiveSection(IDS, 0.4);

  return (
    <nav className="lg:hidden fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">AG</span>
        </div>
        <div className="flex space-x-6">
          {IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleAnchorClick}
              className={`text-sm transition-colors ${
                active === id ? "text-violet-400" : "hover:text-violet-400"
              }`}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

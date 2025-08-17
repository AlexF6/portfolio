import useActiveSection from "./useActiveSection";
const IDS = ["home", "about", "projects"];

export default function Sidebar() {
  const { active, handleAnchorClick } = useActiveSection(IDS, 0.4);

  return (
    <nav className="fixed top-0 left-0 h-full w-20 bg-gray-900 border-r border-gray-800 z-50 hidden lg:flex flex-col items-center py-8">
      <div className="mb-8">
        <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">AG</span>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        {IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleAnchorClick}
            title={id[0].toUpperCase() + id.slice(1)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              active === id ? "bg-violet-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}

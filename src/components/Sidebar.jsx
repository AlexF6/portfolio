const Sidebar = () => {
  return(
    <nav className="fixed top-0 left-0 h-full w-20 bg-gray-900 z-50 hidden lg:flex flex-col items-center py-8">
      <div className="">
        <div className="flex w-8 h-8 p-5 bg-violet-600 rounded-lg items-center justify-center">
          <span className="text-white font-bold">AL</span>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
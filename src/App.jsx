import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Mobilenav from './components/MobileNav'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-tr from-gray-950 to-gray-900 text-gray-100'>
      {/* navigation */}
      <Mobilenav/>
      <Sidebar/>
      <div className="lg:ml-20">
        <Hero/>
        <About/>
      </div>
    </div>
  )
}

export default App

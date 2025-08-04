import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-tr from-gray-950 to-gray-900 text-gray-100'>
      {/* navigation */}
      <Sidebar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App

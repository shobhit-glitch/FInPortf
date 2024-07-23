
import React from 'react'


import NavBar from './Components/NavBar'
import About from './Components/About'
import Hero from './Components/Hero'
import Techno from './Components/Techno'
import Exo from './Components/Exo'
import Proj from './Components/Proj'
import Contacts from './Components/Contacts'

function App() {
  return (
    <div className='overlow-x-hidden text-neutral-300 anatialised sletion:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      
      <div classsName="container mx-auto px-8">
      <NavBar/>
      <Hero/>
      <About/>
      <Techno/>
      <Exo/>
      <Proj/>
      <Contacts/>
      </div>
      

    </div>
  )
}

export default App

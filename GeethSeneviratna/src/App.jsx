import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero1 from './components/Hero1/Hero1'
import About from './components/About/About'
import Service from './components/Service/Service'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero1/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

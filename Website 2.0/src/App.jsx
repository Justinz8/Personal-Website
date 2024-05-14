import { useState, useRef } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './home.jsx'
import Footer from './Footer.jsx'

function App() {

  const SectionObjects = new Map([
    ["AboutMe", useRef(null)],
    ["Skills", useRef(null)],
    ["Projects", useRef(null)],
    ["Contacts", useRef(null)],
])
  function goToSectionFunc(SectionName){
    SectionObjects.get(SectionName).current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  
  return (
    <div className='body-container'>
      <Navbar goToSectionFunc={goToSectionFunc}/>
      <Home SectionObjects={SectionObjects}/>
      <Footer />
    </div>
  )
}

export default App

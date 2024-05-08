import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './home.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <div className='body-container'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

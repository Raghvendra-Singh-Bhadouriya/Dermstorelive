import { useState } from 'react'
import Navbar from "./Components/Navbar"
import './App.css'
import AllRoutes from './Components/AllRoutes'
import Footer from "./Footer/Footer"

function App() {

  return (
    <>
     <Navbar/>
      <AllRoutes/>
     <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './General-Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './General-Components/Footer/Footer'
function Root() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
        
    )
}

export default Root
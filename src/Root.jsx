import React from 'react'
import Navbar from './General-Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
        
    )
}

export default Root
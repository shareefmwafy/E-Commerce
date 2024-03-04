// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import NotFound from './General-Components/NotFound/NotFound'
import Home from './Home-Page/Home/Home.jsx'
import Root from './Root'
import SignIn from './General-Components/SignIn/signIn.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<NotFound/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:<SignIn/>
      },
      {
        path:'*',
        element:<NotFound/>
      }
    ]
  }
])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

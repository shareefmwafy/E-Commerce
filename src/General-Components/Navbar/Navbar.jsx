import React from 'react'
import style from './Navbar.module.css'
import {Link} from 'react-router-dom'

function dropdownMenu() {
  
}


function Navbar() {
  return (

    <nav>
      <div className= {style.container}>
        <div className={style.row}>

          <div className={style.products}>
            <Link className={style.navBtn} to='/'>Home</Link>
            <Link className={style.navBtn}>Products</Link>
            <Link className={style.navBtn}>Cart</Link>
          </div>

          <span className={style.logo}>Cndle Light</span>
          
          <div className={style.sign}>
            <button>Singin</button>
            <button>Signup</button>
          </div>
          <div className={style.burgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
    console.log(isDropdown);
  };

  return (
    <nav className={isDropdown ? 'dropdown' : ''}>
      <div className="containerNav">
        <div className="rowNav">

          <div className='rowOne'>
            <span className="logo">AL-Sahreef Store</span>
            <button className="burgerIcon" onClick={handleDropdown}>
                <span></span>
                <span></span>
                <span></span>
              </button>
          </div>
        

          <div className={'products'}>
            <Link className={`navBtnHome ${isDropdown ? 'dFlexNav' : 'dNoneNav'}`} to='/'>Home</Link>
            <Link className={`navBtnProducts ${isDropdown ? 'dFlexNav' : 'dNoneNav'}`}>Products</Link>
            <Link className={`navBtnCart ${isDropdown ? 'dFlexNav' : 'dNoneNav'}`}>Cart</Link>
          </div>

          
          
          <div className={'sign'}>
            <Link className={`loginBtn ${isDropdown ? 'dFlexNav' : 'dNoneNav'}`} to='/login'>Login</Link>
            <Link className={`signUpBtn ${isDropdown ? 'dFlexNav' : 'dNoneNav'}`} to='/signup'>SignUp</Link>
          </div>

          

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

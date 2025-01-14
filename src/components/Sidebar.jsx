import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ( {children} ) => {

  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="logo">
              <h1 className='h1'>ChrisCiMo</h1>
            </div>
            <nav className={showMenu ? "menu-mobile" : "menu-web"}>
              <ul>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/scripts'>Scripts</NavLink>
                </li>
                <li>
                  <NavLink to='/movies'>Movies</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </nav>
            
            <div className='ham-menu'>
            <button 
                  className="ham-btn" 
                  onClick={handleToggle} 
                  aria-label="Toggle navigation menu" 
                > 
                <GiHamburgerMenu />
              </button>  
            </div>

          </div>
        </div>
      </header>

      <main>{children}</main>
    </>
  )
}

export default Sidebar
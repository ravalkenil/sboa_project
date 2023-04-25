import React from 'react'
import {  Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { PrimaryNav, MenuLink, Menu, Hamburger } from './css/Navbar'
const header = () => {
  return (
    <div>
      {/* <header>
          <nav>
          <li className="nav-item">
            <HashLink className="nav-link" smooth to=''>
              About
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" smooth to="">
              Features
            </HashLink>
          </li>
          </nav>
      </header>  */}
      <PrimaryNav>
        <Hamburger />
        <Menu>
           <HashLink className="nav-link" smooth to="#xscs">
              Home
            </HashLink>
        </Menu>
      </PrimaryNav>
  </div>  
  )
}

export default header